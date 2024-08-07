import { BaseButtonProps } from "./BaseButton.types";

export default function BaseButton(props: BaseButtonProps) {
  const { fit, outlined, className, disabled, ...restProps } = props;

  const backgroundColor = disabled
    ? "#1A88E1"
    : outlined
    ? "transparent"
    : "#1A88E1";
  const textColor = outlined ? "#239FAC" : "white";
  const hasBoxShadow = backgroundColor === "#1A88E1";


  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    boxShadow: hasBoxShadow ? "" : "none"
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
