import { createTheme } from "@mui/material";

// Extensão dos tipos do tema para incluir as cores personalizadas
declare module "@mui/material/styles" {
  interface Palette {
    michas: Palette["primary"];
    roxo: Palette["primary"];
    rosa: Palette["primary"];
  }
  interface PaletteOptions {
    michas?: PaletteOptions["primary"];
    roxo?: PaletteOptions["primary"];
    rosa?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    michas: {
      main: "#FF0000",
      contrastText: "#ffffff",
    },
    roxo: {
      main: "rgb(41, 41, 80)",
      contrastText: "#ffffff",
    },
    rosa: {
      main: "#7B2CBF",
      contrastText: "#ffffff",
    },
  },
});
