import { Stack } from "@mui/material";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import InvestmentTable from "./components/InvestmentTable";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Stack alignItems="center">
        <Header/>
        <UserInput/>
        <InvestmentTable/>
      </Stack>
    </ThemeProvider>
    
    
  )
}

export default App
