import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Grid,
  LinearProgress,
  Card,
  CardContent,
  CardActions,
  TextField,
} from "@mui/material";
import { Star } from "@mui/icons-material";

const TopBar = ({xp: xp}) =>{
    
    return (
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Gamifizierte Finanzbildung
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Star sx={{ color: "#FFFF00", mr: 1 }} /> 
                <Typography color="#FFFF00" variant="body1" component="div">
                    {xp}
                </Typography>
            </Box>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;