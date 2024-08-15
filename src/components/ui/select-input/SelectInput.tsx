import React, { useState } from "react";
import { SelectInputProps } from "./SelectInput.types";

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  labelColor,
  width,
  onChange = () => {},
  ...rest
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    onChange(e);
  };

  return (
    <div className="flex flex-col">
      <label 
       className="font-semibold mb-2"
       style={{
         color: labelColor ? "#1C1A1A" : "#1C1A1A",
         borderRight: "none",
       }}
      >{label}</label>
      <select
        value={selectedOption}
        onChange={handleChange}
        style={{
          backgroundColor:"#fff",
          border: "0.71px solid #00000033",
        }}
        {...rest}
        className={`border border-l-0 pl-2 h-12 pr-12 ${width} text-sm rounded-lg focus:outline-none`}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
