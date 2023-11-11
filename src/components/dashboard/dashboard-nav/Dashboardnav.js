import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import { Grid } from "@mui/material";
const navItems = ["Today", "Month", "Year"];


const Dashboardnav = () => {


  return (
    <Box padding=" 20px 24px" sx={{ background: "#3B3363" }} width="100%" display="flex" justifyContent="space-between" alignItems="center">
      <Grid container >
        <Grid item sm={9}>
          <h3>Dashboard</h3>
        </Grid>
        <Grid item sm={3}>
          <Box color="#fff" display="flex">
            {navItems.map((list, ind) => (
              <ListItem key={ind}>{list}</ListItem>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboardnav;
