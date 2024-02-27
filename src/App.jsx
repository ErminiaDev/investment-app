import { Stack, Typography } from "@mui/material";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import InvestmentTable from "./components/InvestmentTable";
import { useState } from "react";
import { EURformatter, USDformatter } from "./util/investment";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  overrides: {
    MuiButton: {
      primary: {
        color: "white",
      },
    },
  },
});

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const [format, setFormat] = useState(EURformatter);

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

  function handleClear() {
    setUserInput({
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0,
    });
  }
  function handleCurrency(currency) {
    if(currency==="EUR"){
      setFormat(EURformatter)
    } else {
      setFormat(USDformatter)
    }
    console.log(format, currency);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Stack alignItems="center">
        <Header />
        <UserInput
          userInput={userInput}
          onChange={handleChange}
          onClick={handleCurrency}
          onClear={handleClear}
        />
        {!inputIsValid && (
          <Typography mt={3}>Please enter a valid duration</Typography>
        )}
        {inputIsValid && (
          <InvestmentTable userInput={userInput} formatter={format}/>
        )}
      </Stack>
    </ThemeProvider>
  );
}

export default App;
