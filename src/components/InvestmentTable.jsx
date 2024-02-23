import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  calculateInvestmentResults,
  EURformatter,
  USDformatter,
} from "../util/investment";

export default function InvestmentTable({ userInput, currency }) {
  const [currency, setCurrency] = useState('');

  const resultsData = calculateInvestmentResults(userInput);

  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  console.log(resultsData);
  console.log("component", currency);
  return (
    <TableContainer sx={{ marginTop: "5em", width: "50em" }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Year</TableCell>
            <TableCell align="right">Investment Value</TableCell>
            <TableCell align="right">Interest</TableCell>
            <TableCell align="right">Total Interest</TableCell>
            <TableCell align="right">Invested Capital</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resultsData.map((results) => {
            const totalInterest =
              results.valueEndOfYear -
              results.annualInvestment * results.year -
              initialInvestment;
            const totalAmountInvested = results.valueEndOfYear - totalInterest;

            {
              if (currency === "EUR") {
				console.log('EURcomponent' ,currency)
                return (
                  <TableRow
                    key={results.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {results.year}
                    </TableCell>
                    <TableCell align="right">
                      {EURformatter.format(results.valueEndOfYear)}
                    </TableCell>
                    <TableCell align="right">
                      {EURformatter.format(results.interest)}
                    </TableCell>
                    <TableCell align="right">
                      {EURformatter.format(totalInterest)}
                    </TableCell>
                    <TableCell align="right">
                      {EURformatter.format(totalAmountInvested)}
                    </TableCell>
                  </TableRow>
                );
              } else {
				console.log('USDcomponent' ,currency);
                return (
                  <TableRow
                    key={results.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {results.year}
                    </TableCell>
                    <TableCell align="right">
                      {USDformatter.format(results.valueEndOfYear)}
                    </TableCell>
                    <TableCell align="right">
                      {USDformatter.format(results.interest)}
                    </TableCell>
                    <TableCell align="right">
                      {USDformatter.format(totalInterest)}
                    </TableCell>
                    <TableCell align="right">
                      {USDformatter.format(totalAmountInvested)}
                    </TableCell>
                  </TableRow>
                );
              }
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
