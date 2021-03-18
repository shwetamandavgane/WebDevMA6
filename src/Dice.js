import React from 'react';
import styled from 'styled-components';
import { useStore } from './Store';

const Label = styled.label`
  justify-content:center;  
  font-size:20px;
  border-style:solid;
  border-color:grey;
  background-color:white;
  color:black;
  border-radius:20%;
  padding:8px 10px 8px 10px;
  margin-left:10px;
  margin-top:50%;
  margin-bottom: 50%;
`;


export default function Dice(props) {
  const { state, dispatch } = useStore();
  
  return (
        <Label>{props.num}</Label>                   
  );
}