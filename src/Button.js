import React, { useState } from 'react';
import './App.css';


const Button = ({value, onclick})=>{
  /*button을 클릭했을때 버튼이 없어지게 만들예정 */
  const [isClicked, setIsClicked] = useState(false);
  let className = '';
  
  if(isClicked){
    className = 'hidden';
  }
  
  let clickHandler = ()=>{
    setIsClicked(true)
    //부모컴포넌트에 "'이 버튼' 클릭됐어요!"전달하기
    onclick(value);
  };


  return(
    <button className={className} onClick={clickHandler}>{value}</button>
  
  )

}

export default Button;