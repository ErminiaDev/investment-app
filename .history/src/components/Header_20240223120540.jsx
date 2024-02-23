import { Stack, Typography } from "@mui/material";

export default function Header({}){
	return(
	<Stack spacing={2}>
		<img src="./../assets/investment-calculator-logo.png" alt="" />
		<Typography variant="h3">React Investment Calculator</Typography>
	</Stack>
	)
		
}