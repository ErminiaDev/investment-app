import { Stack, TextField, CardContent, Card } from "@mui/material";

export default function UserInput() {
  return (
	<Card sx={{marginTop:"2em"}}>
		<CardContent
		  component="form"
		  noValidate
		  autoComplete="off"
		>
		  <Stack direction="row" sx={{marginBottom:"1em"}}>
			<TextField sx={{width:"15em", marginRight:"2em"}} id="outlined-basic" label="Initial Investment" variant="outlined" />
			<TextField sx={{width:"15em"}} id="outlined-basic" label="Annual Investment" variant="outlined" />
		  </Stack>
		  <Stack direction="row">
			<TextField sx={{width:"15em", marginRight:"2em"}} id="outlined-basic" label="Expected Return" variant="outlined" />
			<TextField sx={{width:"15em"}} id="outlined-basic" label="Duration" variant="outlined" />
		  </Stack>
		</CardContent>
	</Card>
    
  );
}
