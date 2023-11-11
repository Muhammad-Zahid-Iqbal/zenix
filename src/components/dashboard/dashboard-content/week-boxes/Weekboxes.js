import { Grid } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import img_box1 from "../../../../images/img1.png";
import img_box2 from "../../../../images/img2.png";
import img_box3 from "../../../../images/img3.png";
import img_box4 from "../../../../images/img4.png";
import arow from "../../../../images/arow.png";
import arow2 from "../../../../images/arow2.png";
import Div from "../../../../shared/Div/Div";

const Weekboxes = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    textAlign: "center",
    margin: "auto",
    position: "relative",
    top: "-30px",
  }
  const h2 = {
    color: "#000",
    fontSize: "22px",
    fontWeight: 600,
    textAlign: "center",
  }
  const p = {
    color: "#000", textAlign: "center" 
  }
  const box_size = {
    // display: "flex",
    // flexWrap: "wrap",
    "& > :not(style)": {
      mt: 2,
      width: "100%",
      height: 150,
    }
  }
  
  return (
    <Grid container spacing={2}  mt={3}>
      <Grid item sm={3} xs={12}>
        <Box
          sx={box_size}
        >
          <Paper elevation={3}>
            <img
              src={img_box1}
              height={65}
              width={65}
              style={style}
            />
            <Div>
              <h2 style={h2}>
                $168,331.09
              </h2>
              <p style={p}>
                <img src={arow} height={20} width={20} />
                <span style={{ color: "#68CF29" }}>45% </span>This week
              </p>
            </Div>
          </Paper>
        </Box>
      </Grid>
      <Grid item sm={3} xs={12}>
        <Box
          sx={box_size}
        >
          <Paper elevation={3}>
          <img
              src={img_box2}
              height={65}
              width={65}
              style={style}
            />
            <Div>
              <h2 style={h2}>
              $24,098
              </h2>
              <p style={p}>
                <img src={arow} height={20} width={20} />
                <span style={{ color: "#68CF29" }}>45% </span>This week
              </p>
            </Div>
              </Paper>
        </Box>
      </Grid>
      <Grid item sm={3} xs={12}>
        <Box
         sx={box_size}
        >
          <Paper elevation={3}>
          <img
              src={img_box3}
              height={65}
              width={65}
              style={style}
            />
            <Div>
              <h2 style={h2}>
              $667,224
              </h2>
              <p style={p}>
                <img src={arow2} height={20} width={20} />
                <span style={{ color: "#e66025" }}>45% </span>This week
              </p>
            </Div>
          </Paper>
        </Box>
      </Grid>
      <Grid item sm={3} xs={12}>
        <Box
         sx={box_size}
        >
          <Paper elevation={3}>
          <img
              src={img_box4}
              height={65}
              width={65}
              style={style}
            />
            <Div>
              <h2 style={h2}>
              $667,224
              </h2>
              <p style={p}>
                <img src={arow} height={20} width={20} />
                <span style={{ color: "#68CF29" }}>45% </span>This week
              </p>
            </Div>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Weekboxes;
