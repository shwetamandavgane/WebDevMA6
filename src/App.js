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

export default function App() {  
  const { state, dispatch } = useStore();

  return (  
    <div>      
      {/** Two button, textbox for sum, Dice  */}
      <Button onClick={() => dispatch({ type: 'COUNTER_INC' })}>Roll Dice</Button>
      <Button onClick={() => dispatch({ type: 'COUNTER_RESET' })}>Clear</Button>
      <MyText num={state.counter}/>
      
      {state.diceRolls.map(n=> <Dice num={n} />)}
      
    </div>  
  );  
}  