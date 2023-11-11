import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Box } from "@mui/material";

const Layout = ({children}) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Box height="60px">
        <Navbar setOpen={setOpen} open={open} />
      </Box>
      <Box display="flex">
        <Sidebar open={open} />
        <Box width="100%">
         {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
