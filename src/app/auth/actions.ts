
'use server';

import { z } from 'zod';
import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';

// --- Admin Supabase Auth Actions ---

const adminLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function loginAdmin(data: unknown) {
  const parsedData = adminLoginSchema.safeParse(data);
   if (!parsedData.success) {
    return { error: 'Invalid data provided.' };
  }

  const { email, password } = parsedData.data;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: `Could not authenticate admin: ${error.message}` };
  }
  
  return { error: null };
}

export async function signOut() {
  const supabase = createClient();
  await supabase.auth.signOut();
  // Redirect to home after sign out
  return redirect('/');
}


// --- Custom Client Authentication Actions ---

const newClientSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  company: z.string().optional(),
  email: z.string().email('Invalid email address'),
  username: z.string().min(3, 'Username must be at least 3 characters'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export async function createClientAccount(data: unknown) {
  const supabase = createClient();
  
  const parsedData = newClientSchema.safeParse(data);
  if (!parsedData.success) {
    return { success: false, message: 'Invalid data provided', errors: parsedData.error.flatten().fieldErrors };
  }
  
  const { name, company, email, username, password } = parsedData.data;

  // Check if username or email already exists
  const { data: existingClient, error: checkError } = await supabase
    .from('clients')
    .select('username, email')
    .or(`username.eq.${username},email.eq.${email}`)
    .single();

  if (checkError && checkError.code !== 'PGRST116') { // Ignore 'exact one row' error
    console.error('Error checking for existing client:', checkError);
    return { success: false, message: `Database error: ${checkError.message}` };
  }
  if (existingClient) {
    if (existingClient.username === username) {
      return { success: false, message: 'Username is already taken.' };
    }
    if (existingClient.email === email) {
      return { success: false, message: 'Email is already registered.' };
    }
  }

  // Hash the password
  const password_hash = await bcrypt.hash(password, 10);

  const { data: newClient, error } = await supabase
    .from('clients')
    .insert({ name, company, email, username, password_hash })
    .select('id, name, company, email, username')
    .single();

  if (error) {
    console.error('Error creating client:', error);
    return { success: false, message: `Could not create client: ${error.message}` };
  }

  return { success: true, message: 'Client created successfully.', client: newClient };
}


const clientLoginSchema = z.object({
  username: z.string().min(1, { message: "Username is required." }),
  password: z.string().min(1, { message: "Password is required." }),
});

export async function loginClient(data: unknown) {
  const parsedData = clientLoginSchema.safeParse(data);
  if (!parsedData.success) {
    return { error: 'Invalid username or password.' };
  }

  const { username, password } = parsedData.data;
  const supabase = createClient();

  const { data: client, error } = await supabase
    .from('clients')
    .select('id, password_hash')
    .eq('username', username)
    .single();
  
  if (error || !client) {
    return { error: 'Invalid username or password.' };
  }

  const passwordsMatch = await bcrypt.compare(password, client.password_hash);

  if (!passwordsMatch) {
    return { error: 'Invalid username or password.' };
  }

  // Manually create a session for the client using a JWT
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const alg = 'HS256';

  const jwt = await new SignJWT({ 
      sub: client.id, // Subject (client's ID)
      aud: 'authenticated', // Audience
      role: 'client', // Custom role
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24), // 24-hour expiry
    })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .sign(secret);
  
  cookies().set('client_session', jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
  });

  return { error: null };
}

export async function signOutClient() {
  cookies().delete('client_session');
  return redirect('/');
}
