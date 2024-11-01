import { FormInputPayload } from "../../../utils/types/global.types";
import { InputHTMLAttributes } from "react";

// import { ChangeHandler } from "react-hook-form";

export type TextInputProps = {
  label?: string;
  labelColor?: boolean;
  onChange?: (payload: FormInputPayload) => void;
  validation?: any;
  validationTrigger?: string | null;
  type?: string;
  placeholder?: string;
  height?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "onChange">;
