import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const CustomButton = ({ text, variant = "contained", color = "primary", customColor, onClick, type = "button" }) => {
  const sx =  { borderRadius: "8px" };

  return (
    <Button type={type} variant={variant} color={color} onClick={onClick} sx={sx}>
      {text}
    </Button>
  );
};

export default CustomButton;
