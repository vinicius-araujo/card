import { ReactNode } from 'react';

export enum CARD {
  TOGGLE_INFO = 'TOGGLE_INFO',
  IMPORT_DATA = 'IMPORT_DATA',
  ADD_ROWS = 'ADD_ROWS',
  FAVORITE = 'FAVORITE',
  MORE = 'MORE',
}

export type CardAction = { type: CARD.TOGGLE_INFO };

export type CardDispatch = (action: CardAction) => void;
export type CardProviderProps = { children: ReactNode };
