import React from "react";
import { Box, Typography, Stack } from "@mui/material";
// import svg404 from "../../assests/icons/404.svg";

export const PageNotFound = () => {
  return (
    <Box 
        sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh' 
        }}
    >
        <Typography variant="h4">
            404 - The page you were looking for doesn't exist.
        </Typography>
    </Box>
);
};
