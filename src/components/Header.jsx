import { Box, Stack, Typography } from "@mui/material";
import logo from "../assets/investment-calculator-logo.png"

export default function Header() {
  return (
    <Stack spacing={2} display="flex" alignItems="center" mt={5}>
      <Box
        component="img"
        sx={{ height: 150, width:150 }}
        src={logo}
        alt=""
      />
      <Typography variant="h3">Investment Calculator</Typography>
    </Stack>
  );
}
