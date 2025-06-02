
'use client';

import { useState, useEffect } from 'react'; // Added useEffect import
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'; // Keep Label for consistency if needed, but FormLabel is primary
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Calculator, TrendingUp } from 'lucide-react';
import { Alert, AlertDescription as UiAlertDescription } from '@/components/ui/alert'; // Renamed to avoid conflict
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { useForm, Controller } from 'react-hook-form'; // Import useForm and Controller
import { zodResolver } from '@hookform/resolvers/zod'; // Import zodResolver
import { z } from 'zod'; // Import z

interface CalculatorInput {
  adSpend: string;
  cpc: string;
  conversionRate: string;
  conversionValue: string;
  currency: string; // Added currency to the form values
}

interface CalculatorOutput {
  clicks: number;
  conversions: number;
  revenue: number;
  roas: number;
}

const currencySymbols: { [key: string]: string } = {
  USD: '$',
  INR: '₹',
  EUR: '€',
  GBP: '£',
};

const calculatorSchema = z.object({
  currency: z.string(),
  adSpend: z.string().refine(val => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
    message: "Must be a positive number.",
  }),
  cpc: z.string().refine(val => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
    message: "Must be a positive number.",
  }),
  conversionRate: z.string().refine(val => !isNaN(parseFloat(val)) && parseFloat(val) > 0 && parseFloat(val) <= 100, {
    message: "Must be between 0.01 and 100.",
  }),
  conversionValue: z.string().refine(val => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
    message: "Must be a positive number.",
  }),
});


export default function AdsRoiEstimatorSection() {
  const [results, setResults] = useState<CalculatorOutput | null>(null);
  // Error state is now handled by react-hook-form

  const form = useForm<CalculatorInput>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      adSpend: '',
      cpc: '',
      conversionRate: '',
      conversionValue: '',
      currency: 'USD',
    },
  });

  const selectedCurrency = form.watch('currency');
  const currencySymbol = currencySymbols[selectedCurrency] || selectedCurrency;

  const handleCalculate = (data: CalculatorInput) => {
    const adSpendNum = parseFloat(data.adSpend);
    const cpcNum = parseFloat(data.cpc);
    const conversionRateNum = parseFloat(data.conversionRate) / 100;
    const conversionValueNum = parseFloat(data.conversionValue);

    const calculatedClicks = adSpendNum / cpcNum;
    const calculatedConversions = calculatedClicks * conversionRateNum;
    const calculatedRevenue = calculatedConversions * conversionValueNum;
    const calculatedRoas = adSpendNum > 0 ? calculatedRevenue / adSpendNum : 0;

    setResults({
      clicks: calculatedClicks,
      conversions: calculatedConversions,
      revenue: calculatedRevenue,
      roas: calculatedRoas,
    });
  };
  
  // Clear results when inputs change
  const anInputValueIsChanging = form.watch(['adSpend', 'cpc', 'conversionRate', 'conversionValue', 'currency']);
  useEffect(() => { // Changed from React.useEffect
    setResults(null);
  }, [anInputValueIsChanging]);


  return (
    <section id="ads-roi-estimator" className="w-full py-16 md:py-24 bg-card/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
            <Calculator className="w-8 h-8 mr-3 text-primary icon-glow-primary" />
            Advertising Potential Calculator
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what your Meta & Google Ads could achieve. This simple tool helps estimate your campaign's success.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card shadow-xl">
          <CardHeader>
            <CardTitle>Estimate Your Ad Returns</CardTitle>
            <CardDescription>
              Want to see what your ads could do? Pop in a few numbers based on your business and ad goals. Our simple calculator will estimate your website clicks, new customers, potential revenue, and Return On Ad Spend (ROAS). No complex jargon, just straightforward insights!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleCalculate)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="currency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select Currency</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background focus:ring-primary">
                            <SelectValue placeholder="Select Currency" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="USD">USD ({currencySymbols.USD}) - United States Dollar</SelectItem>
                          <SelectItem value="INR">INR ({currencySymbols.INR}) - Indian Rupee</SelectItem>
                          <SelectItem value="EUR">EUR ({currencySymbols.EUR}) - Euro</SelectItem>
                          <SelectItem value="GBP">GBP ({currencySymbols.GBP}) - British Pound</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="adSpend"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Monthly Ad Spend ({currencySymbol})</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="e.g., 500" {...field} className="bg-background focus:ring-primary" />
                        </FormControl>
                        <FormDescription>How much you plan to spend on ads each month.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cpc"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Avg. Cost Per Click (CPC) ({currencySymbol})</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="e.g., 1.00" {...field} className="bg-background focus:ring-primary" />
                        </FormControl>
                        <FormDescription>The typical cost for a single click on your ad.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="conversionRate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website Conversion Rate (%)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="e.g., 3" {...field} className="bg-background focus:ring-primary" />
                        </FormControl>
                        <FormDescription>Out of 100 ad clicks, how many usually become customers?</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="conversionValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Avg. Value Per New Customer ({currencySymbol})</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="e.g., 75" {...field} className="bg-background focus:ring-primary" />
                        </FormControl>
                        <FormDescription>The average revenue you make from one new customer.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                {/* Global form errors can be displayed here if needed, but field-specific errors are handled by FormMessage */}
                 {form.formState.errors.root && (
                    <Alert variant="destructive" className="mt-4">
                        <AlertCircle className="h-4 w-4" />
                        <UiAlertDescription>{form.formState.errors.root.message}</UiAlertDescription>
                    </Alert>
                )}


                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
                  <TrendingUp className="mr-2 h-4 w-4" /> Calculate Potential
                </Button>
              </form>
            </Form>
          </CardContent>

          {results && (
            <CardFooter className="flex-col items-start p-6 mt-2 border-t border-border">
              <h3 className="text-xl font-semibold text-primary mb-4">Your Estimated Potential:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 w-full text-sm">
                <div className="p-3 bg-muted/50 rounded-md">
                  <p className="text-muted-foreground">Potential Website Clicks:</p>
                  <p className="font-semibold text-xl text-foreground">{results.clicks.toFixed(0)}</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-md">
                  <p className="text-muted-foreground">Potential New Customers:</p>
                  <p className="font-semibold text-xl text-foreground">{results.conversions.toFixed(1)}</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-md">
                  <p className="text-muted-foreground">Potential Monthly Revenue:</p>
                  <p className="font-semibold text-xl text-foreground">{currencySymbol}{results.revenue.toFixed(2)}</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-md">
                  <p className="text-muted-foreground">Potential Return On Ad Spend (ROAS):</p>
                  <p className="font-semibold text-xl text-foreground">{results.roas.toFixed(2)}x</p>
                </div>
              </div>
               <p className="text-xs text-muted-foreground mt-6 italic">
                *These are estimates. Actual results may vary based on campaign quality, targeting, ad creatives, landing page experience, and market conditions.
              </p>
            </CardFooter>
          )}
        </Card>
      </div>
    </section>
  );
}

