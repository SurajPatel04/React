import React, { useId } from "react";

function Input({
  from,
  type,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "use",
}) {
  const amountInputId = useId();

  return (
    <div className="flex flex-col md:flex-row bg-white m-4 w-full rounded-lg p-4">
      {/* Left Column: Label and Input */}
      <div className="flex flex-col flex-grow mb-4 md:mb-0 md:mr-4">
        <label htmlFor={amountInputId} className="mb-2 text-sm md:text-base">
          {from}
        </label>

        <input
          type="number"
          id={amountInputId}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          className="outline-none border rounded p-2 text-sm md:text-base"
        />
      </div>

      {/* Right Column: Label and Select */}
      <div className="flex flex-col justify-start">
        <label htmlFor="type" className="mb-2 text-sm md:text-base">
          {type}
        </label>
        <select
          name="type"
          id="type"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="outline-none border rounded p-2 text-sm md:text-base"
        >
          {/* Loop with return statement */}
          {currencyOption.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
