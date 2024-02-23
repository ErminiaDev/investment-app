import { Stack, TextField, CardContent, Card } from "@mui/material";
import { useState } from "react";

export default function UserInput({onChange, userInput}) {
  

  
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
            onChange={(event) =>
              onChange("expectedReturn", event.target.value)
            }
          />
          <TextField
            sx={{ width: "15em" }}
            id="outlined-basic"
            label="Duration"
            variant="outlined"
            inputProps={{ type: "number" }}
            required
			value={userInput.duration}
            onChange={(event) =>
              onChange("duration", event.target.value)
            }
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
