import React, { useState } from 'react';
import { InputBox } from './components'; 
import useCurrencyInfo from './hooks/useCurrencyInfo'; 

function App() {
  // State variables
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd"); // Default 'From' currency is USD
  const [to, setTo] = useState("inr");     // Default 'To' currency is INR
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Fetch currency info based on 'from' currency using custom hook
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  // Function to swap 'from' and 'to' currencies
  const swap = () => {
    // Swap currencies
    const tempFrom = to;
    const tempTo = from;
    setFrom(tempFrom);
    setTo(tempTo);
    // Swap amounts
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  // Function to perform currency conversion
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
         style={{
           backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
         }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            {/* InputBox for 'From' currency */}
            <div className="w-full mb-4">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            {/* Swap button */}
            <div className="relative w-full h-0.5 mb-4">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            {/* InputBox for 'To' currency */}
            <div className="w-full mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable // Disabling amount input for 'To' currency
              />
            </div>
            {/* Convert button */}
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
