import React, { useState } from 'react';
import LetterGrid from './LetterGrid';
import ButtonGrid from './ButtonGrid';
/*
function GameBoard() {
  return (
    
    <div className="App">
      <h2>{props.secretWord}</h2>
    </div>
  );
}*/
/*
function GameBoard({secretWord}) {
  return(
    <div className="App">
    <h2>{secretWord}</h2>
  </div>
  )
}*/


const GameBoard = ({ secretWord, maxError, answerLength }) => {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [errorCount, setErrorCount] = useState(0);


  let clickHandler = (value) => {//사용자가 선택한 그 문자 = value
    let val = value.toLowerCase();
    //guessedLetters 복사본 생성 let c = a.concat(b)
    //복사본에 새로운 값추가
    //기존배열 ->복사본 변경

    /*방법1
    let gl = [...guessedLetters];
    gl.push(val);
    setGuessedLetters(gl);*/
    //setGuessedLetters(prev=>{return [...prev,val] });
    setGuessedLetters(prev => [...prev, val]);

    /*
    틀리면 errorCount를 1씩 증가시킨다.
    */
    if (secretWord.indexOf(val) === -1) {
      setErrorCount(errorCount + 1);
    }



    /*최대 클릭할 수 있는 횟수를 정하고 
    실행했을 때 */



  }

  let reset = ()=>{
    setErrorCount(0);
    setGuessedLetters([]);
    let buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(item=>item.classList.remove('hidden'));
  }

  return (
    <>
      {errorCount < maxError ?
        <div className="gameboard {secretWord ? '':'hidden'}">
          틀린횟수 : {errorCount} / {maxError} 회
          {/* <h2>{secretWord}</h2> */}
          <LetterGrid secretWord={secretWord} complete={reset} guessedLetters={guessedLetters} answerLength={answerLength} />
          {/* 방법1. 삼항연산자{ 조건 ? 할일 : 거짓 } */}
          {/* {errorCount < maxError ?  <ButtonGrid onclick={clickHandler} /> : <p>GAME OVER</p>} */}
          {/* 방법2. 비교연산자 if(a&&b) */}
          {/* {errorCount < maxError && <ButtonGrid onclick={clickHandler} />}  */}
          {/* 방법3. 스크립트 안에는 함수 1개만 가능, 빈<>를 이용해서 전체 div를 함수로 감싸기 */}
          <ButtonGrid onclick={clickHandler} />
        </div>
        :
        <button className={secretWord ? '' : 'hidden'} onClick={reset}> Retry? </button>
      }
    </>
  )
}

/* 
특정 값을 찾아서 있는지 없는지 판별해주는 함수
indexOf 사용하기
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");

search 사용하기
text.search("Blue");
*/

export default GameBoard;