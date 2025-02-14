import TextField from "@mui/material/TextField";

const CustomInput = ({
  label,
  placeholder,
  variant = "outlined",
  multiline = false,
  rows,
}) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      variant={variant}
      multiline={multiline}
      rows={rows}
    />
  );
};

export default CustomInput;
