import React from "react";
import Main from "./components/Main";
import "../src/app.css";
import {theme} from "./Config/theme.js"
import {  ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="class-pai">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
