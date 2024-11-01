import React from 'react';
import Button from './Button';
import './App.css';

const ButtonGrid= ({onclick})=> {
  let letters = [
    'A','B','C','D','E','F','G','H',
        'I','J','K','L','M','N','O','P',
        'Q','R','S','T','U','V','W','X',
        'Y','Z'
  ];

  //부모컴포넌트에 "'이 버튼' 클릭됐어요!" 받은 값 전달하기
  // let clickHandler = (value)=>{
  //     onclick(value);
  // }

  let buttons = letters.map((letter,idx)=>(
    <Button value={letter} key={idx} onclick={onclick}/>
  ));

  return (
    <div className="buttons">
     {buttons}
    </div>
  );
}



export default ButtonGrid;