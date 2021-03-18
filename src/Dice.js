import React from 'react';
import styled from 'styled-components';

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
`;


export default function Dice(props) {
  
  return (
    <div>
        <Label>{props.num}</Label>
    </div>
  );
}