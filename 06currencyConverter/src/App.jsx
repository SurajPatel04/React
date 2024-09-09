import { useState, useEffect } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import Input from "./components/Inputbox";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const CurrencyInfo = useCurrencyInfo(from);
  const options = Object.keys(CurrencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  useEffect(() => {
    // Trigger conversion when 'from', 'to', or 'amount' changes
    if (CurrencyInfo[to] && amount != null) {
      setConvertedAmount(amount * CurrencyInfo[to]);
    }
  }, [from, to  , CurrencyInfo]);

  const convert = () => {
    if (CurrencyInfo[to]) {
      setConvertedAmount(amount * CurrencyInfo[to]);
    }
  };

  return (
    <div className="w-1/2 h-screen mx-auto flex justify-center items-center">
      <div className="glossy-background w-full h-auto rounded-lg bg-gradient-to-r from-white/20 via-white/30 to-white/20 shadow-inner flex items-center justify-center p-4 flex-col">
        <h1 className='text-center text-black bg-green-300 w-full p-3 rounded-xl'>Currency Converter</h1>
        <Input
          from="From"
          label="From"
          currencyOption={options}
          amount={amount}
          onAmountChange={setAmount}
          onCurrencyChange={setFrom}
          selectCurrency={from}
          type="Currency Type"
        />
        <button className='bg-blue-700 text-white border-white-300 px-5 py-2 rounded-3xl border' onClick={swap}>Swap</button>
        <Input
          from="To"
          label="To"
          currencyOption={options}
          amount={convertedAmount}
          onCurrencyChange={(currency)=>setTo(currency)}
          selectCurrency={to}
          type="Currency Type"
        />
        <button className='bg-blue-700 text-white p-2 rounded-3xl w-full h-12' onClick={convert}>
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default App;
