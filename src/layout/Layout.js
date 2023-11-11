import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Box } from "@mui/material";

const Layout = ({children}) => {
  const [open, setOpen] = useState(true);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 959) {
        setOpen(false); // For mobile view, close the sidebar by default
      } else {
        setOpen(true); // For larger screens, keep it open
      }
    };

    handleResize(); // Set initial state on component mount

    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup

  }, []);
  
  return (
    <>
      <Box height="65px">
        <Navbar setOpen={setOpen} open={open} />
      </Box>
      <Box display="flex">
        <Sidebar open={open} />
        <Box
          sx={{
            '@media (max-width: 959px)': {
              overflowX: 'hidden', 
            },
            '@media (min-width: 960px)': {
              width: '100%', 
            },
          }}
        >
         {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
