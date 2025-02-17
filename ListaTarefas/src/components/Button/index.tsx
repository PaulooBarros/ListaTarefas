import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
// Exemplo de importação do seu arquivo de cores (ajuste o caminho conforme necessário)

interface CustomButtonProps extends Omit<ButtonProps, "color"> {
  text: string;
  color?: any;
  customColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  variant = "contained",
  color = "primary",
  customColor,
  onClick,
  type = "button",
  ...rest
}) => {
  const sx = {
    borderRadius: "8px",
    ...(customColor && { backgroundColor: customColor }),
  };

  return (
    <Button
      type={type}
      variant={variant}
      color={color}
      onClick={onClick}
      sx={sx}
      {...rest}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
