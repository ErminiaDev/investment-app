import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(year, investmentValue, interest, totalInterest, investedCapital) {
  return { year, investmentValue, interest, totalInterest, investedCapital };
}

const rows = [
  createData(1, "16,725€", "825€", "825€", "15,900€" ),
  createData(2, "18,545€", "920€", "1745€", "16,800€"),
  createData(3, "20,465€", "1020€", "2,765€", "17700€"),
  createData(4, "22490€", "1126€", "3890€", "18600€"),
  createData(5, "24627€", "1237€", "5127€", "19500€"),
];

export default function InvestmentTable() {
  return (
	<TableContainer sx={{ marginTop:"5em", width: "50em"}} component={Paper}>
	  <Table  aria-label="simple table">
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
		  {rows.map((row) => (
			<TableRow
			  key={row.name}
			  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
			>
			  <TableCell component="th" scope="row">
				{row.year}
			  </TableCell>
			  <TableCell align="right">{row.investmentValue}</TableCell>
			  <TableCell align="right">{row.interest}</TableCell>
			  <TableCell align="right">{row.totalInterest}</TableCell>
			  <TableCell align="right">{row.investedCapital}</TableCell>
			</TableRow>
		  ))}
		</TableBody>
	  </Table>
	</TableContainer>
  );
}