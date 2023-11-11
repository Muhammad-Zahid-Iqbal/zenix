import { Grid } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import img1 from "../../../../images/img1.png";
import arow from "../../../../images/arow.png";
import Div from "../../../../shared/Div/Div";

const Weekboxes = () => {
  return (
    <Grid container spacing={2} padding={2} mt={3}>
      <Grid item sm={3} xs={12}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "100%",
              height: 150,
            },
          }}
        >
          <Paper elevation={3}>
            <img
              src={img1}
              height={65}
              width={65}
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                textAlign: "center",
                margin: "auto",
                position: "relative",
                top: "-40px",
              }}
            />
            <Div>
              <h2
                style={{
                  color: "#000",
                  fontSize: "22px",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                $168,331.09
              </h2>
              <p style={{ color: "#000", textAlign: "center" }}>
                <img src={arow} height={20} width={20} />
                <span style={{ color: "#68CF29" }}>45% </span>This week
              </p>
            </Div>
          </Paper>
        </Box>
      </Grid>
      <Grid item sm={3} xs={12}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "100%",
              height: 150,
            },
          }}
        >
          <Paper elevation={3}>
            {/* <img src={arow} height={65} width={65} style={{display:"flex", justifyContent:"center", textAlign:"center", textAlign:"center", margin:"auto", position:"relative",top:"-40px"}}/> */}
          </Paper>
        </Box>
      </Grid>
      <Grid item sm={3} xs={12}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "100%",
              height: 150,
            },
          }}
        >
          <Paper elevation={3}></Paper>
        </Box>
      </Grid>
      <Grid item sm={3} sx={12}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "100%",
              height: 150,
            },
          }}
        >
          <Paper elevation={3}></Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Weekboxes;
