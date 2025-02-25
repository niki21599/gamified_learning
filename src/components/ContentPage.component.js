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
import { CenterFocusStrong, CheckCircleOutline } from "@mui/icons-material";
import { ContentPageType } from "../enum/contentPageType.enum";
import { pagesContent } from "../data/pagesContent";
import ProgressBar from "./ProgressBar.component";
import ReactPlayer from "react-player";



const ContentPage = ({ page, onNext, onAnswer, onBefore }) => {

    const currentPage = pagesContent[page];

    return (
        <Container>
          <ProgressBar progress={((page) / pagesContent.length) * 100} />
          {currentPage.type === ContentPageType.VIDEOCONTENT ? (
            <Box>
              <Typography variant="h4" gutterBottom>
                {currentPage.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {currentPage.description}
              </Typography>
              <Box sx={{mt: 4}}>
                <ReactPlayer url={currentPage.videoUrl} controls/>
              </Box>
            </Box>
          ) : (
            <Box>
              <Typography variant="h5" gutterBottom>
                {currentPage.question}
              </Typography>
              {currentPage.isAnswered ? 
              (<Box container spacing={2}>
                {currentPage.options.map((option) => (
                    option.correct? (
                        <Card sx={{backgroundColor: "green", mb: 2}}>
                            <CardContent sx={{color: "white", display: "flex", alignItems: "center"}}>
                                <Typography>{option.answer}</Typography>
                            </CardContent> 
                        </Card>
                    ): (
                        <Card sx={{backgroundColor: "red", mb: 2}}>
                            <CardContent sx={{color: "white"}}>
                                <Typography>{option.answer}</Typography>
                            </CardContent> 
                        </Card>
                    )
                ))}
            </Box>)
                : 
                    (<Box >
                        {currentPage.options.map((option) => (
                            <Card sx={{mb: 2, cursor: "pointer"}}>
                                <CardContent onClick={() => onAnswer(option.correct, currentPage)}>
                                    <Typography>{option.answer}</Typography>
                                </CardContent> 
                            </Card>
                        ))}
                    </Box>)
                }
              
            </Box>
          )}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
            <Button variant="contained" color='secondary' onClick={onBefore} disabled={page == 0} sx={{mr: 2}}>
                Zurück
            </Button>
            <Button variant="contained" onClick={onNext}>
                Weiter
            </Button>
          </Box>
          
        </Container>
      );
}


export default ContentPage;