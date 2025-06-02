
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Calculator, TrendingUp } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CalculatorInput {
  adSpend: string;
  cpc: string;
  conversionRate: string;
  conversionValue: string;
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

export default function AdsRoiEstimatorSection() {
  const [inputs, setInputs] = useState<CalculatorInput>({
    adSpend: '',
    cpc: '',
    conversionRate: '',
    conversionValue: '',
  });
  const [results, setResults] = useState<CalculatorOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
    setError(null); 
    setResults(null); 
  };

  const handleCurrencyChange = (value: string) => {
    setSelectedCurrency(value);
    setResults(null); // Clear results when currency changes
    setError(null); // Clear error when currency changes
  };

  const validateInputs = (): boolean => {
    const { adSpend, cpc, conversionRate, conversionValue } = inputs;
    if (isNaN(parseFloat(adSpend)) || parseFloat(adSpend) <= 0) {
      setError(`Monthly Ad Spend must be a positive number.`);
      return false;
    }
    if (isNaN(parseFloat(cpc)) || parseFloat(cpc) <= 0) {
      setError(`Average CPC must be a positive number.`);
      return false;
    }
    if (isNaN(parseFloat(conversionRate)) || parseFloat(conversionRate) <= 0 || parseFloat(conversionRate) > 100) {
      setError('Conversion Rate must be a number between 0 and 100.');
      return false;
    }
    if (isNaN(parseFloat(conversionValue)) || parseFloat(conversionValue) <= 0) {
      setError(`Average Conversion Value must be a positive number.`);
      return false;
    }
    setError(null);
    return true;
  };

  const handleCalculate = () => {
    if (!validateInputs()) {
      setResults(null);
      return;
    }

    const adSpendNum = parseFloat(inputs.adSpend);
    const cpcNum = parseFloat(inputs.cpc);
    const conversionRateNum = parseFloat(inputs.conversionRate) / 100;
    const conversionValueNum = parseFloat(inputs.conversionValue);

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

  const currencySymbol = currencySymbols[selectedCurrency] || selectedCurrency;

  return (
    <section id="ads-roi-estimator" className="w-full py-16 md:py-24 bg-card/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
            <Calculator className="w-8 h-8 mr-3 text-primary icon-glow-primary" />
            Estimate Your Advertising Potential
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Use this simple calculator to estimate potential clicks, conversions, revenue, and ROAS for your Meta & Google Ads campaigns.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card shadow-xl">
          <CardHeader>
            <CardTitle>Ads ROI Calculator</CardTitle>
            <CardDescription>Enter your estimated figures to see the potential returns.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="currency" className="text-sm font-medium">Select Currency</Label>
              <Select value={selectedCurrency} onValueChange={handleCurrencyChange}>
                <SelectTrigger id="currency" className="mt-1 bg-background focus:ring-primary">
                  <SelectValue placeholder="Select Currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD ({currencySymbols.USD}) - United States Dollar</SelectItem>
                  <SelectItem value="INR">INR ({currencySymbols.INR}) - Indian Rupee</SelectItem>
                  <SelectItem value="EUR">EUR ({currencySymbols.EUR}) - Euro</SelectItem>
                  <SelectItem value="GBP">GBP ({currencySymbols.GBP}) - British Pound</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="adSpend" className="text-sm font-medium">Monthly Ad Spend ({currencySymbol})</Label>
                <Input
                  id="adSpend"
                  name="adSpend"
                  type="number"
                  placeholder="e.g., 1000"
                  value={inputs.adSpend}
                  onChange={handleInputChange}
                  className="mt-1 bg-background focus:ring-primary"
                />
              </div>
              <div>
                <Label htmlFor="cpc" className="text-sm font-medium">Average CPC ({currencySymbol})</Label>
                <Input
                  id="cpc"
                  name="cpc"
                  type="number"
                  placeholder="e.g., 0.50"
                  value={inputs.cpc}
                  onChange={handleInputChange}
                  className="mt-1 bg-background focus:ring-primary"
                />
              </div>
              <div>
                <Label htmlFor="conversionRate" className="text-sm font-medium">Conversion Rate (%)</Label>
                <Input
                  id="conversionRate"
                  name="conversionRate"
                  type="number"
                  placeholder="e.g., 2.5"
                  value={inputs.conversionRate}
                  onChange={handleInputChange}
                  className="mt-1 bg-background focus:ring-primary"
                />
              </div>
              <div>
                <Label htmlFor="conversionValue" className="text-sm font-medium">Avg. Conversion Value ({currencySymbol})</Label>
                <Input
                  id="conversionValue"
                  name="conversionValue"
                  type="number"
                  placeholder="e.g., 50"
                  value={inputs.conversionValue}
                  onChange={handleInputChange}
                  className="mt-1 bg-background focus:ring-primary"
                />
              </div>
            </div>
            
            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button onClick={handleCalculate} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
              <TrendingUp className="mr-2 h-4 w-4" /> Calculate ROI
            </Button>
          </CardContent>

          {results && (
            <CardFooter className="flex-col items-start p-6 mt-2 border-t border-border">
              <h3 className="text-xl font-semibold text-primary mb-4">Estimated Results:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 w-full text-sm">
                <div className="p-3 bg-muted/50 rounded-md">
                  <p className="text-muted-foreground">Estimated Clicks:</p>
                  <p className="font-semibold text-lg text-foreground">{results.clicks.toFixed(0)}</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-md">
                  <p className="text-muted-foreground">Estimated Conversions:</p>
                  <p className="font-semibold text-lg text-foreground">{results.conversions.toFixed(1)}</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-md">
                  <p className="text-muted-foreground">Estimated Revenue:</p>
                  <p className="font-semibold text-lg text-foreground">{currencySymbol}{results.revenue.toFixed(2)}</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-md">
                  <p className="text-muted-foreground">Estimated ROAS:</p>
                  <p className="font-semibold text-lg text-foreground">{results.roas.toFixed(2)}x</p>
                </div>
              </div>
               <p className="text-xs text-muted-foreground mt-4 italic">
                *These are estimates. Actual results may vary based on campaign quality, targeting, ad creatives, landing page experience, and market conditions.
              </p>
            </CardFooter>
          )}
        </Card>
      </div>
    </section>
  );
}
