import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const drawerWidth = 240;
const navItems = ["Today", "Month", "Year"];

const Dashboardnav = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box padding=" 20px 24px" sx={{ background: "#3B3363" }} width="100%" display="flex" justifyContent="space-between" alignItems="center">
      {/* <CssBaseline /> */}
      {/* <AppBar
        component="nav"
        sx={{ marginTop: "65px", Width: "82%", background: "#3B3363" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid
            item
            sm={6}
            xs={12}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              textAlign: "center",
            }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Box sx={{ display: "flex" }}>
               {navItems.map((item) => (
                                <Button key={item} sx={{ color: '#fff' }}>
                                    {item}
                                </Button>
                            ))} 
              <ListItem>Today</ListItem>
              <ListItem>Month</ListItem>
              <ListItem>Year</ListItem>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav> */}
      <h3>Dashboard</h3>
      <Box color="#fff" display="flex" gap={4}>
        {navItems.map((list, ind) => (
          <ListItem key={ind}>{list}</ListItem>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboardnav;
