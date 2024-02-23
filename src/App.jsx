import { Stack, Typography } from "@mui/material";
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
  overrides: {
    MuiButton: {
      primary: {
        color: 'white',
      },
    },
  }
});

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;
  //need to force input to a number value
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  function handleClear(){
    setUserInput({
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration:  0,
    })
  }
  function handleCurrency(value){
    const selectedCurrency = value;
    return selectedCurrency;
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Stack alignItems="center">
        <Header/>
        <UserInput userInput={userInput} onChange={handleChange} onClick={handleCurrency} onClear={handleClear}/>
        {!inputIsValid && <Typography mt={3}>Please enter a valid duration</Typography>}
        {inputIsValid && <InvestmentTable userInput={userInput} currency={selectedCurrency}/>}
      </Stack>
    </ThemeProvider>
    
    
  )
}

export default App
