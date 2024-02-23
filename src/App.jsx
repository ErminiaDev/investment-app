import { Stack } from "@mui/material";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import InvestmentTable from "./components/InvestmentTable";
import { useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Stack alignItems="center">
        <Header/>
        <UserInput userInput={userInput} onChange={handleChange}/>
        <InvestmentTable userInput={userInput}/>
      </Stack>
    </ThemeProvider>
    
    
  )
}

export default App
