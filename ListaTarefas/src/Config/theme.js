import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

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
  typography: {
    roxo: {
      main: "#FFF",
      contrastText: "#ffffff",
    },
  },
});
