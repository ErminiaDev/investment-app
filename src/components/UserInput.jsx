import { Stack, TextField, CardContent, Card, Button, IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function UserInput({ onChange, userInput, onClear, onClick }) {
  return (
    <Card sx={{ marginTop: "2em" }}>
      <CardContent component="form" noValidate autoComplete="off">
        <Stack direction="row" sx={{ marginBottom: "1em" }}>
          <TextField
            sx={{ width: "15em", marginRight: "2em" }}
            id="outlined-basic"
            label="Initial Investment"
            variant="outlined"
            inputProps={{ type: "number" }}
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
          <TextField
            sx={{ width: "15em" }}
            id="outlined-basic"
            label="Annual Investment"
            variant="outlined"
            inputProps={{ type: "number" }}
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </Stack>
        <Stack direction="row">
          <TextField
            sx={{ width: "15em", marginRight: "2em" }}
            id="outlined-basic"
            label="Expected Return"
            variant="outlined"
            inputProps={{ type: "number" }}
            required
            value={userInput.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
          <TextField
            sx={{ width: "15em" }}
            id="outlined-basic"
            label="Duration"
            variant="outlined"
            inputProps={{ type: "number" }}
            required
            value={userInput.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </Stack>
        <Stack mt={2} direction="row" justifyContent="space-between">
		<Stack direction="row" spacing={2}>
			<Button onClick={(event)=> onClick(event.target.value)} variant="outlined" color="inherit" value="EUR" startIcon={<EuroSymbolIcon />}>
			  EUR
			</Button>
			<Button onClick={(event)=> onClick(event.target.value)} variant="outlined" color="inherit" value="USD" startIcon={<AttachMoneyIcon />}>
			  USD
			</Button>
		  </Stack>
          <Button
            onClick={onClear}
            sx={{ textTransform: "capitalize" }}
            variant="outlined"
            color="inherit"
            startIcon={<DeleteForeverIcon />}
          >
            Clear data
          </Button>
          
        </Stack>
      </CardContent>
    </Card>
  );
}
