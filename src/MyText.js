import React from 'react';
import styled from 'styled-components';

const Text = styled.h3`
  justify-content:center;  
  font-size:40px;
`;

export default function MyText(props) {
  return (
    <div>
        <Text>Sum : {props.num}</Text>
    </div>
  );
}