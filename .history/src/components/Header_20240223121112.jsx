import { Box, Stack, Typography } from "@mui/material";

export default function Header({}) {
  return (
    <Stack spacing={2}>
      <Box
        component="img"
        sx={{ height: 100, width:"100%" }}
        src="src/assets/investment-calculator-logo.png"
        alt=""
      />
      <Typography variant="h3">React Investment Calculator</Typography>
    </Stack>
  );
}