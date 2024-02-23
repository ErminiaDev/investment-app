import { Box, Stack, Typography } from "@mui/material";

export default function Header({}) {
  return (
    <Stack spacing={2} display="flex" alignItems="center" mt=>
      <Box
        component="img"
        sx={{ height: 150, width:150 }}
        src="src/assets/investment-calculator-logo.png"
        alt=""
      />
      <Typography variant="h3">React Investment Calculator</Typography>
    </Stack>
  );
}
