import TextField from "@mui/material/TextField";

const CustomInput = ({
  label,
  placeholder,
  variant = "outlined",
  multiline = false,
  rows,
  value,
  onChange
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
    />
  );
};

export default CustomInput;
