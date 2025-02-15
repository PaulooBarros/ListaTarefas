import TextField from "@mui/material/TextField";

const CustomInput = ({
  label,
  placeholder,
  variant = "outlined",
  multiline = false,
  rows,
  value,
  onChange,
  onlyNumbers = false // Novo parâmetro para permitir apenas números
}) => {
  const handleChange = (e) => {
    // Verifica se o campo aceita apenas números
    if (onlyNumbers && !/^\d*$/.test(e.target.value)) {
      return; // Se o valor não for número, não faz nada
    }
    onChange(e); // Chama a função onChange original
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
      // Usando "text" porque estamos controlando a entrada com regex
      type="text"
    />
  );
};

export default CustomInput;
