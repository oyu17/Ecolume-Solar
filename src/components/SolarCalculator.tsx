import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, ArrowRight, Zap, Leaf, Fuel, TrendingUp } from 'lucide-react';
import { useCurrency } from '../hooks/useCurrency';
import { CALCULATOR_DEFAULTS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface BillInput {
  bill: string;
  usage: string;
}

export const SolarCalculator = () => {
  const { currency, formatPrice, convert } = useCurrency();
  const [step, setStep] = useState(1);
  const [inputs, setInputs] = useState<BillInput[]>([
    { bill: '', usage: '' },
    { bill: '', usage: '' },
    { bill: '', usage: '' },
  ]);

  const handleInputChange = (index: number, field: keyof BillInput, value: string) => {
    const newInputs = [...inputs];
    newInputs[index][field] = value;
    setInputs(newInputs);
  };

  const results = useMemo(() => {
    const validInputs = inputs.filter(i => i.bill && i.usage);
    if (validInputs.length < 3) return null;

    const avgMonthlyUsage = inputs.reduce((acc, curr) => acc + Number(curr.usage), 0) / 3;
    const avgMonthlyBill = inputs.reduce((acc, curr) => acc + Number(curr.bill), 0) / 3;
    const annualUsage = avgMonthlyUsage * 12;

    // System Sizing: Pdc = Eannual / (Yspecific * 0.80)
    const suggestedKWp = annualUsage / (CALCULATOR_DEFAULTS.SPECIFIC_YIELD * 0.80);
    
    // Estimated Cost (roughly 50k PHP per kWp for estimation)
    const estimatedCostPHP = suggestedKWp * 55000; 
    
    // ROI Logic
    const years = Array.from({ length: 25 }, (_, i) => i + 1);
    let cumulativeUtility = 0;
    let cumulativeSolar = estimatedCostPHP;
    let currentMonthlyBill = avgMonthlyBill;
    
    const chartData = years.map(year => {
      cumulativeUtility += currentMonthlyBill * 12;
      currentMonthlyBill *= (1 + CALCULATOR_DEFAULTS.ANNUAL_INFLATION);
      
      // Solar path: very low bill (assume 90% reduction)
      const solarMonthlyBill = avgMonthlyBill * 0.1 * Math.pow(1 + CALCULATOR_DEFAULTS.ANNUAL_INFLATION, year);
      cumulativeSolar += solarMonthlyBill * 12;

      return {
        year: `Year ${year}`,
        Utility: Math.round(convert(cumulativeUtility)),
        Solar: Math.round(convert(cumulativeSolar)),
      };
    });

    // Payback Period
    let paybackYears = 0;
    let utilTotal = 0;
    let solarTotal = estimatedCostPHP;
    for (let y = 1; y <= 25; y++) {
      const annualUtil = avgMonthlyBill * 12 * Math.pow(1 + CALCULATOR_DEFAULTS.ANNUAL_INFLATION, y);
      utilTotal += annualUtil;
      if (utilTotal >= solarTotal) {
        paybackYears = y + (solarTotal - (utilTotal - annualUtil)) / annualUtil;
        break;
      }
    }

    return {
      suggestedKWp: suggestedKWp.toFixed(1),
      paybackYears: paybackYears.toFixed(1),
      totalSavings25yr: cumulativeUtility - cumulativeSolar,
      chartData,
      eco: {
        trees: Math.round((annualUsage * 25 * CALCULATOR_DEFAULTS.CO2_PER_KWH) / CALCULATOR_DEFAULTS.TREE_CO2_ABSORPTION),
        gas: Math.round(annualUsage * 25 * CALCULATOR_DEFAULTS.GAS_SAVED_PER_KWH),
      }
    };
  }, [inputs, convert]);

  return (
    <section className="py-24 bg-gray-50" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-4">Simple Solar Calculator</h2>
          <p className="text-lg text-slate-gray max-w-2xl mx-auto">
            Grab your last 3 utility bills. We'll show you exactly how much you're "renting" your power for.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Input Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <div className="flex justify-between mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= s ? 'bg-forest-green text-white' : 'bg-gray-100 text-gray-400'}`}>
                    {s}
                  </div>
                  <span className={`text-sm font-medium ${step >= s ? 'text-forest-green' : 'text-gray-400'}`}>Month {s}</span>
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-forest-green">Enter details for Month {step}</h3>
                <div>
                  <label className="block text-sm font-medium text-slate-gray mb-2">Total Bill ({currency === 'PHP' ? '₱' : '$'})</label>
                  <input
                    type="number"
                    value={inputs[step - 1].bill}
                    onChange={(e) => handleInputChange(step - 1, 'bill', e.target.value)}
                    placeholder="e.g. 8500"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-forest-green focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-gray mb-2">Usage (kWh)</label>
                  <input
                    type="number"
                    value={inputs[step - 1].usage}
                    onChange={(e) => handleInputChange(step - 1, 'usage', e.target.value)}
                    placeholder="e.g. 450"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-forest-green focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  {step > 1 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="flex-1 px-6 py-3 rounded-xl border border-forest-green text-forest-green font-semibold hover:bg-forest-green/5 transition-all"
                    >
                      Back
                    </button>
                  )}
                  <button
                    onClick={() => step < 3 ? setStep(step + 1) : null}
                    disabled={!inputs[step - 1].bill || !inputs[step - 1].usage}
                    className="flex-1 bg-forest-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {step === 3 ? 'Calculate Savings' : 'Next Month'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Results Dashboard */}
          <div className="space-y-6">
            {!results ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-white rounded-3xl border-2 border-dashed border-gray-200">
                <Calculator className="w-16 h-16 text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-400">Complete the form to see your results</h3>
                <p className="text-gray-400 mt-2">We'll calculate your ROI, system size, and environmental impact.</p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Payback Period</p>
                    <p className="text-2xl font-bold text-forest-green">{results.paybackYears} Years</p>
                    <p className="text-xs text-slate-gray mt-1">System pays for itself</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Suggested System</p>
                    <p className="text-2xl font-bold text-forest-green">{results.suggestedKWp} kWp</p>
                    <p className="text-xs text-slate-gray mt-1">Based on your usage</p>
                  </div>
                </div>

                {/* Savings Chart */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-[300px]">
                  <h4 className="text-sm font-bold text-slate-gray mb-4 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-forest-green" />
                    25-Year Cumulative Cost Comparison
                  </h4>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={results.chartData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="year" hide />
                      <YAxis tickFormatter={(val) => `${currency === 'PHP' ? '₱' : '$'}${val > 1000 ? (val/1000).toFixed(0) + 'k' : val}`} />
                      <Tooltip 
                        formatter={(value: number) => [formatPrice(currency === 'PHP' ? value : value / 0.0166), '']}
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                      />
                      <Legend />
                      <Bar dataKey="Utility" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="Solar" fill="#2D5A27" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Eco Impact */}
                <div className="bg-forest-green text-white p-6 rounded-2xl shadow-lg">
                  <h4 className="text-sm font-bold opacity-80 mb-4 uppercase tracking-widest">Your 25-Year Eco Impact</h4>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-xl">
                        <Leaf className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{results.eco.trees}</p>
                        <p className="text-xs opacity-80">Trees Planted</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-xl">
                        <Fuel className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{results.eco.gas}</p>
                        <p className="text-xs opacity-80">Gallons of Gas Saved</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
