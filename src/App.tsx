import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import Master from "./components/master";
import Theme from "./static/styles/theme-config";
import UseStyles from "./static/styles/use-styles";

function App() {
  const classes = UseStyles();
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
          <Master />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
