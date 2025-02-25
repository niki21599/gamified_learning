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
import { CheckCircleOutline } from "@mui/icons-material";


const ProgressBar = ({progress}) => {
    return (
        <Box sx={{ mt: 2, mb: 2 }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      );
}

export default ProgressBar;