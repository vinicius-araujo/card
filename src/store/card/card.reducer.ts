import { CARD, CardAction, CardState } from '.';

export function cardReducer(state: CardState, action: CardAction): CardState {
  switch (action.type) {
    case CARD.TOGGLE_INFO:
      return {
        ...state,
        isInfoOpened: !state.isInfoOpened,
      };
    default:
      throw Error('Action dispatch not defined');
  }
}
