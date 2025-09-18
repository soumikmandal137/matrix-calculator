import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";

const Wrapper = () => {
  return (
      <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffffff"
      }}>
    

      <Container sx={{ py:4 }}>
        <Outlet /> 
      </Container>    </Box>
  );
};

export default Wrapper;
