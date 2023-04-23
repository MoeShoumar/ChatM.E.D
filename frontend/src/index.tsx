import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#244674",
      contrastText: "#fff",
    },
    secondary: {
      main: "#01b8e2",
      contrastText: "#fff",
    },
    background: {
      default: "#ecf4f6",
    },
    text: {
      primary: "#121c38",
      secondary: "#a0acb7",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.2,
      color: "#244674",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.2,
      color: "#121c38",
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.2,
      color: "#121c38",
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.25rem",
      lineHeight: 1.2,
      color: "#121c38",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
      color: "#121c38",
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
