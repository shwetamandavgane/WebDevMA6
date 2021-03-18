import React, { createContext, useReducer, useContext } from 'react';

const defaultState = {
  counter: 0,
  n:0,
  diceRolls:[]
};

function reducer(state = defaultState, action = {}) {
   
  switch (action.type) {
    case 'COUNTER_INC':
      //Random value for adding and storing it to store for Dice  
      state.n =  (Math.floor(Math.random() * (7 - 1) + 1));
      return { ...state, counter: state.counter + state.n,diceRolls:[...state.diceRolls,state.n] };
    case 'COUNTER_RESET':
      //Resetting for Dice  
      state.n=0;
      return { ...state, counter: 0,diceRolls:[] };
    default:
      return state;
  }
}

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const value = { state, dispatch };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export const useStore = () => useContext(StoreContext);