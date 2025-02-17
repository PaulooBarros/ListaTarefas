import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

interface CustomInputProps extends Omit<TextFieldProps, "onChange"> {
  label: string;
  placeholder?: string;
  variant?: "outlined" | "filled" | "standard";
  multiline?: boolean;
  rows?: number;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  variant = "outlined",
  multiline = false,
  rows,
  value,
  onChange,
  ...rest
}) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      variant={variant}
      multiline={multiline}
      rows={rows}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default CustomInput;
