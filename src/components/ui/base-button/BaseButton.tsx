import { BaseButtonProps } from "./BaseButton.types";

export default function BaseButton(props: BaseButtonProps) {
  const { fit, outlined, className, disabled, ...restProps } = props;

  
  const textColor = outlined ? "#239FAC" : "white";


  const buttonStyle = {
    color: textColor,
  };

  return (
    <button
      {...restProps}
      className={`flex items-center justify-center gap-5 py-[14px] rounded-lg text-sm font-bold
      ${fit ? "w-[241px]" : "w-full"}
     ${outlined ? "border" : ""} ${className}`}
      style={buttonStyle}
      disabled={disabled}
    >
      {props.children}
    </button>
  );
}
