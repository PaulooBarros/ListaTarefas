import TextField from "@mui/material/TextField";

const CustomInput = ({
  label,
  placeholder,
  variant = "outlined",
  multiline = false,
  rows,
  value,
  onChange,
  onlyNumbers = false 
}) => {
  const handleChange = (e) => {
    if (onlyNumbers && !/^\d*\.?\d*$/.test(e.target.value)) {
      return; 
    }
    onChange(e);
  };

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      variant={variant}
      multiline={multiline}
      rows={rows}
      value={value}
      onChange={handleChange}
      type="text"
    />
  );
};

export default CustomInput;