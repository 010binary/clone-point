import React from "react";
type Props = {
  className?: string;
  fill?: string;
};
const TellersIcon = ({ className, fill }: Props) => {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 20V0L1.5 1.5L3 0L4.5 1.5L6 0L7.5 1.5L9 0L10.5 1.5L12 0L13.5 1.5L15 0L16.5 1.5L18 0V20L16.5 18.5L15 20L13.5 18.5L12 20L10.5 18.5L9 20L7.5 18.5L6 20L4.5 18.5L3 20L1.5 18.5L0 20ZM3 15H15V13H3V15ZM3 11H15V9H3V11ZM3 7H15V5H3V7Z"
        fill="#198C06"
      />
    </svg>
  );
};

export default TellersIcon;
