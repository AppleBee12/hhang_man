import { useEffect, useState } from 'react';
import './App.css';
import GameBoard from './GameBoard';
import SetWord from './SetWord';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [maxError, setMaxError] = useState(0);
  const [answerLength, setAnswerLength] = useState(0);
  const [secretWord, setSecretWord] = useState('');

  useEffect(()=>{
    let word = window.localStorage.getItem('secretWord')
    if(word && word.length > 0){
      setSecretWord(word);
      setAnswerLength(word.length);
      setMaxError(word.length + 2);
    }else{
      setAnswerLength(0);
      setMaxError(1);
    }
  },[])

  return (

    <div className="App">
      <h1>Hangman🎃</h1>
      <p>게임 한판 하실래요?</p>
      <Routes>
        <Route path="/" element={<GameBoard secretWord={secretWord} maxError={maxError} answerLength={answerLength} />} />
        <Route path="/admin" element={<SetWord />} />
      </Routes>
    </div>

  );
}

export default App;