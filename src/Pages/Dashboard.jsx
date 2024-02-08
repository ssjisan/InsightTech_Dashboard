import { Box, Grid, Toolbar, Typography } from "@mui/material";
import Sidebar from "../Layout/Sidebar/Sidebar";
import StateCard from "../Components/Dashboard/StateCard";
//eslint-disable-next-line
import RadialChart from "../Components/Dashboard/RadialChart";

export default function Dashboard() {
  const drawerWidth = 280;

  return (
    <Box>
      <Sidebar />
      <Box
        component="main"
        sx={{
          p: 3,
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        <Box sx={{ paddingBottom: "20px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Typography variant="h2">Dashboard</Typography>
            <Typography variant="body3" color="text.primary">Home</Typography>
          </Box>
        </Box>
        {/* <StateCard /> */}
        <Grid container sx={{ mt: "40px" }}>
          <Grid item xs={12} lg={3}>
            <RadialChart />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}