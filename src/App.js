import './App.css';
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
import { CheckCircleOutline, HighlightOffOutlined } from "@mui/icons-material";
import TopBar from './components/TopBar.component';
import ContentPage from './components/ContentPage.component';
import { pagesContent } from './data/pagesContent';
import { API_ENDPOINT } from './data/API';

function App() {

  const [page, setPage] = useState(0);
  const [xp, setXp] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState(false);

  const handleNext = () => {

    const linkToSurvey = "https://docs.google.com/forms/d/e/1FAIpQLSd83hJDDsQuGm8LeHS1p9_zckQmFpuV9IcKVv2AP6IsmGu-Hw/viewform?usp=dialog"; 

    if (page < (pagesContent.length -1)) {
      setPage(prev => prev + 1)
    }else{
      // Generieren einer vierstelligen Zufallszahl: 
      let randomNumber = Math.floor(Math.random() * (9999 - 1000) + 1000);
      let userName = "user" + randomNumber;
      let userData = {name: userName, xp: xp};

      fetch(API_ENDPOINT + "users", {
        method: "POST", 
        body: JSON.stringify(userData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      .then(res => { 
        window.location.href = linkToSurvey;
      })
    }
  };
  const handleBefore = () =>{
    if(page > 0){
      setPage(prev => prev - 1);
    }
  }

  const handleAnswer = (isCorrect, page) => {
     setAnswerCorrect(isCorrect);
    if (isCorrect) {
      setXp((prev) => prev + 10); // XP für richtige Antwort
      setAnimation(true); // Animation starten
      page.isAnswered = true;
      setTimeout(() => {
        setAnimation(false);
      }, 1500);
    } else {
      setAnimation(true); // Animation starten
      page.isAnswered = true;
      setTimeout(() => {
        setAnimation(false);
      }, 1500);
    }
  };



return (
    <Box>
    <TopBar xp={xp}/>
    {animation ? answerCorrect ? (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f0f0f0",
        }}
      >
        <CheckCircleOutline
          sx={{ fontSize: 100, color: "green" }}
        />
        <Typography variant="h4" sx={{ ml: 2 }}>
          Richtige Antwort! +10 XP 🎉
        </Typography>
      </Box>
    ): (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f0f0f0",
        }}
      >
        <HighlightOffOutlined
          sx={{ fontSize: 100, color: "red" }}
        />
        <Typography variant="h4" sx={{ ml: 2 }}>
          Falsche Antwort! 👎
        </Typography>
      </Box>
    ) : (
      <ContentPage page={page} onNext={handleNext} onAnswer={handleAnswer} onBefore={handleBefore} xp={xp}/>
    )}
  </Box>
);
  
}

export default App;
