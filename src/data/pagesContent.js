import { ContentPageType } from "../enum/contentPageType.enum";

export const pagesContent = [
  {
    type: ContentPageType.VIDEOCONTENT,
    title: "Herzlich Willkommen!",
    description: "Schön, dass du da bist. Schau dir gerne das folgende Video an: ",
    videoUrl: "./videos/greeting_v2.mov", 
  },
    {
      type: ContentPageType.VIDEOCONTENT,
      title: "Zinseszins",
      description: "Schau dir gerne das folgende Video an: ",
      videoUrl: "./videos/joseph.mov", 
    },
    {
      type: ContentPageType.QUIZ,
      question: "Welche der folgenden Aussagen stimmst du zu?",
      isAnswered: false,
      options: [
        { answer: "Der Unterschied zwischen Zins und Zinseszins ist langfristig gewaltig", correct: true },
        { answer: "Der Unterschied zwischen Zins und Zinseszins ist zu vernachlässigen", correct: false },
      ],
    },
    {
        type: ContentPageType.VIDEOCONTENT,
        title: "Monatliches Sparen",
        description: "Schau dir gerne das folgende Video an: ",
        videoUrl: "./videos/rauchen.mov", 
      },
      {
        type: ContentPageType.QUIZ,
        question: "Welche der folgenden Aussagen stimmst du zu?",
        isAnswered: false,
        options: [
          { answer: "Auch kleine, monatliche Beträge können zu einem großen Vermögen führen", correct: true },
          { answer: "Man sollte erst mit mindestens 10.000€ mit dem Investieren und der Altersvorsorge starten ", correct: false },
        ],
      },
      {
        type: ContentPageType.VIDEOCONTENT,
        title: "Anlage Einmalbetrag",
        description: "Schau dir gerne das folgende Video an: ",
        videoUrl: "./videos/auto.mov", 
      },
      {
        type: ContentPageType.QUIZ,
        question: "Welche der folgenden Aussagen stimmst du zu?",
        isAnswered: false,
        options: [
          { answer: "Konsumentscheidungen haben keinen Einfluss auf mein Vermögen", correct: false },
          { answer: "Durch clevere Konsumentscheidungen in jungem Alter kann ich meine Altersvorsorge boosten", correct: true },
        ],
      },
      {
        type: ContentPageType.VIDEOCONTENT,
        title: "Risiko wird belohnt",
        description: "Schau dir gerne das folgende Video an: ",
        videoUrl: "./videos/sparbuch.mov", 
      },
      {
        type: ContentPageType.QUIZ,
        question: "Welche der folgenden Aussagen stimmst du zu?",
        isAnswered: false,
        options: [
          { answer: "Bei der Altersvorsorge sollte man keine Risiken eingehen", correct: false },
          { answer: "Das Eingehen von Risiken bei der Geldanlage wird langfristig belohnt", correct: true },
        ],
      },
      {
        type: ContentPageType.VIDEOCONTENT,
        title: "Früh anfangen lohnt sich",
        description: "Schau dir gerne das folgende Video an: ",
        videoUrl: "./videos/earlystart.mov", 
      },
      {
        type: ContentPageType.QUIZ,
        question: "Welche der folgenden Aussagen stimmst du zu?",
        isAnswered: false,
        options: [
          { answer: "Je früher ich mit meiner Altersvorsorge starte, desto besser", correct: true },
          { answer: "Ausschließlich der Betrag meiner Einzahlung ist für den Vermögensaufbau wesentlich", correct: false },
        ],
      },
      {
        type: ContentPageType.VIDEOCONTENT,
        title: "Finanzielle Gewohnheiten",
        description: "Schau dir gerne das folgende Video an: ",
        videoUrl: "./videos/habits.mov", 
      },
      {
        type: ContentPageType.QUIZ,
        question: "Welche der folgenden Aussagen stimmst du zu?",
        isAnswered: false,
        options: [
          { answer: "Finanzielle Gewohnheiten haben keine positiven Auswirkungen auf mein Vermögensaufbau", correct: false },
          { answer: "Durch finanzielle Gewohnheiten kann ich meinen Vermögensaufbau boosten", correct: true },
        ],
      },
      {
        type: ContentPageType.RANKING
      },
  ];