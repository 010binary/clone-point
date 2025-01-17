import React from "react";
type Props = {
  className?: string;
  fill?: string;
};
const TotalIcon = ({ className, fill }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 9L9.5 0L15 9H4ZM15 20C13.75 20 12.6875 19.5625 11.8125 18.6875C10.9375 17.8125 10.5 16.75 10.5 15.5C10.5 14.25 10.9375 13.1875 11.8125 12.3125C12.6875 11.4375 13.75 11 15 11C16.25 11 17.3125 11.4375 18.1875 12.3125C19.0625 13.1875 19.5 14.25 19.5 15.5C19.5 16.75 19.0625 17.8125 18.1875 18.6875C17.3125 19.5625 16.25 20 15 20ZM0.5 19.5V11.5H8.5V19.5H0.5Z"
        fill="#1A88E1"
      />
    </svg>
  );
};

export default TotalIcon;
