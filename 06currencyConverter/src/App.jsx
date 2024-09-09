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
  }, [from, to, CurrencyInfo]);

  const convert = () => {
    if (CurrencyInfo[to]) {
      setConvertedAmount(amount * CurrencyInfo[to]);
    }
  };

  return (
    <div className="w-full p-4 h-screen mx-auto flex justify-center items-center">
      <div className="glossy-background w-full max-w-md h-auto rounded-lg bg-gradient-to-r from-white/20 via-white/30 to-white/20 shadow-inner flex items-center justify-center p-4 flex-col">
        <h1 className='text-center text-black  w-full p-3 rounded-xl text-lg md:text-2xl'>Currency Converter</h1>
        <Input
          from="From"
          type="Currency Type"
          currencyOption={options}
          amount={amount}
          onAmountChange={setAmount}
          onCurrencyChange={setFrom}
          selectCurrency={from}
        />
        <button className='bg-blue-700 text-white border-white-300 px-5 
        transition-transform transform active:scale-95 
        py-2 rounded-3xl border mt-4' onClick={swap}>Swap</button>
        <Input
          from="To"
          type="Currency Type"
          currencyOption={options}
          amount={convertedAmount}
          onCurrencyChange={setTo}
          selectCurrency={to}
        />
        <button 
          className='bg-blue-700 text-white p-2 rounded-3xl w-full h-12 mt-4 
                    transition-transform transform active:scale-95 
                    hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300' 
          onClick={convert}
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default App;
