// SelectInput.types.ts

interface Option {
  value: string;
  label: string;
}

export interface SelectInputProps {
  label: string;
  labelColor?: boolean
  options: Option[];
  width?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void; 
}
