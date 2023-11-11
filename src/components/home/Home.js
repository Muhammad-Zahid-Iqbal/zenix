import React from 'react'
import Dashboardnav from '../dashboard/dashboard-nav/Dashboardnav'
import { Grid, useMediaQuery, Box } from '@mui/material';
import Filterperiod from '../dashboard/dashboard-filter/Filterperiod'
import Weekboxes from '../dashboard/dashboard-content/week-boxes/Weekboxes';

const Home = () => {
  // const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <>
      <Grid container>
          <Dashboardnav />
          <Box padding="24px" width="100%">
            <Filterperiod />
            <Weekboxes />
          </Box>

        {/* {isMobile ? ( // For mobile devices
          <Grid container spacing={3.75} sx={{ marginTop: "30%", marginLeft: "30px" }}>
            <Grid sm={3}></Grid>
            <Grid item sm={9}>
              <Filterperiod />
            </Grid>
          </Grid>
        ) : ( // For larger devices like laptops
          <Grid container spacing={3.75} sx={{ marginTop: "9%" }}>
            <Grid sm={3}></Grid>
            <Grid item sm={9}>
            </Grid>
          </Grid>
        )}

        <Grid container spacing={2} sx={{ marginTop: "1%" }}>
            <Grid sm={3}></Grid>
            <Grid item sm={9}>
            </Grid>
          </Grid> */}
          
      </Grid>
    </>
  )
}

export default Home
