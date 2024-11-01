import React, { useEffect, useState } from 'react';
import Letter from './Letter';

const LetterGrid = ({ secretWord, guessedLetters, answerLength, complete }) => {

  const [answer, setAnswer] = useState(0);
  //행맨을 성공했을 때 알림을 띄우자!--->
  //answer값이 변경되면 answerLength와 비교해서 정답여부 파악
  useEffect(()=>{
    if(answerLength > 0 && answer === answerLength){
      alert('정답입니다!')
      complete();
    }
  },[answer, answerLength, complete]);


  // guessedLetters의 값이 변경되면 answer를 업데이트
  useEffect(()=>{
    let newCount = [...secretWord].reduce((count,letter)=>{
      return count + (guessedLetters.includes(letter.toLowerCase()) ? 1 : 0);
    },0);
    
    setAnswer(newCount);

    console.log('useEffect실행', newCount);
  },[guessedLetters, secretWord])

  //<---행맨을 성공했을 때!
  //방법1: let letters = secretWord.split('').map(letter=> <span>{letter}</span> )
  //방법2:
    let letters = [...secretWord].map((letter,idx) => {
    //let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1
    //[a,e].indexOf(a) > -1  위는 이걸로 썼고
    //대상.includes(a) 아래는 이걸로 쓸 예정
    let isShown = guessedLetters.includes(letter.toLowerCase());

    
    return (
      <Letter key={idx} value={letter} isShown={isShown}></Letter>
    )
  });

  //letters 안에 문자를 배열로 변환하고 span태그 안에 각각 값이 배열안에 들어가도록 만들기

  return (
    <div className="letters">

      {letters}

    </div>
  );
}

export default LetterGrid;