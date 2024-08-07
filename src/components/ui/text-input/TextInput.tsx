import { useState } from "react";
import { TextInputProps } from "./TextInput.types";
import useTextInput from "./useTextInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons/index";

export default function TextInput(props: TextInputProps) {
  const {
    label,
    labelColor,
    onChange,
    validation,
    validationTrigger,
    type,
    ...inputProps
  } = props;

  const { validationError, handleInputChange } = useTextInput(props);

  const [focused, setFocused] = useState(false);
  const [hasContent, setHasContent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
    if (props.value?.toString().trim() !== "") {
      setHasContent(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="">
      <label
        className="border pl-2 pr-12 py-[23px] text-sm rounded-l-lg"
        style={{
          color: labelColor ? "#239fac" : "000",
          border: "0.71px solid #00000033",
          borderRight: "none",
        }}
      >
        {label}
      </label>

      <input
        {...inputProps}
        type={showPassword ? "text" : type}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          backgroundColor: hasContent ? "#eef9fa" : "",
          border: "0.71px solid #00000033",
        }}
        className="border border-l-0 pl-2 h-16 pr-12 py-4 md:w-96 text-sm rounded-r-lg focus:outline-none"
      />
      {validationError && (
        <p className="text-red-500 font-bold text-xs mt-1.5">
          {validationError}
        </p>
      )}
      {type === "password" && (
        <p onClick={togglePasswordVisibility} className="">
          {showPassword ? (
            <FontAwesomeIcon icon={faEye} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} />
          )}
        </p>
      )}
    </div>
  );
}
