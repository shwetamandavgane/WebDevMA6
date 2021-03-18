import React from 'react';  
import { useStore } from './Store';
import styled from 'styled-components';
import MyText from './MyText';
import Dice from './Dice';

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const Span = styled.span`
  
  margin-top: 30px;
  padding-top: 30px;
`;

export default function App() {  
  const { state, dispatch } = useStore();
  let count = 0;

  return (  
    <div>      
      {/** Two button, textbox for sum, Dice  */}
      <Button onClick={() => dispatch({ type: 'COUNTER_INC' })}>Roll Dice</Button>
      <Button onClick={() => dispatch({ type: 'COUNTER_RESET' })}>Clear</Button>
      <MyText num={state.counter}/>
      
      {state.diceRolls.map(function(item, i){
          if(i%5==0){
            return <span><br /><br/><Dice num={item} /></span>  
          }
          return <Dice num={item} />
      })}
      
    </div>  
  );  
}  