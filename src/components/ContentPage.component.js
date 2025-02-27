import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Button,
  Container,
  Card,
  CardContent,
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, TableRow
} from "@mui/material";
import { CenterFocusStrong, CheckCircleOutline } from "@mui/icons-material";
import { ContentPageType } from "../enum/contentPageType.enum";
import { pagesContent, usersForRanking } from "../data/pagesContent";
import ProgressBar from "./ProgressBar.component";
import ReactPlayer from "react-player";
import { Star } from "@mui/icons-material";


const ContentPage = ({ page, onNext, onAnswer, onBefore, xp }) => {

    const currentPage = pagesContent[page];

    const [users, setUsers] = useState([]);

    useEffect(() => {
      let data = usersForRanking;
      // Da es 4 dummy Users gibt --> Können wir sicher hiervon ausgehen...
      if(data.length == 4){
        data.push({name: "Du", xp: xp});
      }else{
        let user = data.find(x => x.name == "Du");
        user.xp = xp;
        const sortedData = data.sort((a, b) => b.xp - a.xp);
        setUsers(sortedData);
      }
    }, [xp])

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
          ) : currentPage.type === ContentPageType.QUIZ ? (
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
          ): 
          <div>
            <Box>
              <Typography variant="h4" gutterBottom>
                Herzlichen Glückwunsch!
              </Typography>
              <Typography variant="body1" gutterBottom>
                Vielen Dank für das bearbeiten meines Lernelements. Du hast durch das beantworten der Quizfragen {xp}/60 XP erreicht.
                Durch Klick auf 'Weiter' gelangst du zu meiner Umfrage über das Lernelement. 
                Hier siehst du die Rangliste aller Nutzer des Lernelements: 
              </Typography>
            </Box>
            <TableContainer>
                <Typography variant="h5" align="center" sx={{ p: 2 }}>
                  🎮 Rangliste aller Nutzer
                </Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">🏆 Rang</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell align="right"> 
                            <Star /> 
                        </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((user, index) => {
                        const ranks = new Map();
                        let currentRank = 1;
                        users.forEach((user, index) => {
                          if (index === 0) {
                            ranks.set(user.xp, currentRank);
                          } else {
                            const prevUser = users[index - 1];
                            if (user.xp < prevUser.xp) {
                              currentRank = index + 1; 
                            }
                            ranks.set(user.xp, currentRank);
                          }
                        });
                      const rank = ranks.get(user.xp);

                      return (
                        user.name == "Du"? <TableRow sx={{ backgroundColor: "#f4f4f4"}}>
                      <TableCell align="left" sx={{fontWeight: 'bold'}}>{rank + "."}</TableCell>
                      <TableCell align="left" sx={{fontWeight: 'bold'}}>{user.name}</TableCell>
                      <TableCell align="right" sx={{fontWeight: 'bold'}}>{user.xp}</TableCell>
                    </TableRow>: 
                      <TableRow>
                        <TableCell align="left">{rank + "."}</TableCell>
                        <TableCell align="left">{user.name}</TableCell>
                        <TableCell align="right">{user.xp}</TableCell>
                      </TableRow>
                      )  
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
          </div>
          }
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4, mb: 4 }}>
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