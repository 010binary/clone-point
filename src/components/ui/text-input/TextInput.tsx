import { useState } from "react";
import { TextInputProps } from "./TextInput.types";
import useTextInput from "./useTextInput";

export default function TextInput(props: TextInputProps) {
  const {
    label,
    labelColor,
    onChange,
    validation,
    validationTrigger,
    type,
    placeholder,
    width,
    height,
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

  // const togglePasswordVisibility = () => {
  //   setShowPassword((prevShowPassword) => !prevShowPassword);
  // };

  setShowPassword(false)
  console.log(focused)

  return (
    <div className="flex flex-col">
      <label
        className="font-semibold mb-2"
        style={{
          color: labelColor ? "#1C1A1A" : "#1C1A1A",
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
        className={`border border-l-0 pl-2 ${height ? height : "h-12"} pr-12 ${width} text-sm rounded-lg focus:outline-none`}
        placeholder={placeholder ? placeholder : ""}
      />
      {validationError && (
        <p className="text-red-500 font-bold text-xs mt-1.5">
          {validationError}
        </p>
      )}
      {/* {type === "password" && (
        <p onClick={togglePasswordVisibility} className="">
          {showPassword ? (
            <FontAwesomeIcon icon={faEye} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} />
          )}
        </p>
      )} */}
    </div>
  );
}
