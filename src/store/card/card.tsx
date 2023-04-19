import { createContext, useContext, useReducer } from 'react';
import { CardDispatch, CardProviderProps, cardReducer, CardState } from '.';

const CardStateContext = createContext<CardState | undefined>(undefined);
const CardDispatchContext = createContext<CardDispatch | undefined>(undefined);

export const initialstate: CardState = {
  isInfoOpened: false,
};

function CardProvider({ children }: CardProviderProps) {
  const [state, dispatch] = useReducer(cardReducer, initialstate);

  return (
    <CardStateContext.Provider value={state}>
      <CardDispatchContext.Provider value={dispatch}>{children}</CardDispatchContext.Provider>
    </CardStateContext.Provider>
  );
}

function useCardState() {
  const state = useContext(CardStateContext);
  if (typeof state === 'undefined') {
    throw new Error('useCardState must be used within a CardProvider');
  }
  return state;
}

function useCardDispatch() {
  const dispatch = useContext(CardDispatchContext);
  if (typeof dispatch === 'undefined') {
    throw new Error('useCardDispatch must be used within a CardProvider');
  }
  return dispatch;
}

export { CardProvider, useCardState, useCardDispatch };
