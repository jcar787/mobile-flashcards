import { AsyncStorage } from 'react-native';
import { LOAD_DECKS, ADD_DECK, DELETE_DECK, ADD_CARD } from './deckConstants';

export const loadDecksAction = () => {
  return async (dispatch, state) => {
    // read the decks from async storage and load them
    const { deck: decks } = state;
    if (decks) {
      dispatch({ type: LOAD_DECKS, decks });
    } else {
      let decks = await AsyncStorage.getItem('decks');
      decks = decks ? JSON.parse(decks) : [];
      dispatch({ type: LOAD_DECKS, decks });
    }
  };
};

export const addDeckAction = deck => {
  return async (dispatch, getState) => {
    dispatch({ type: ADD_DECK, deck });
    const { decks } = getState().deck;
    await AsyncStorage.setItem('decks', JSON.stringify(decks));
  };
};

export const deleteDeckAction = deckId => {
  return async (dispatch, getState) => {
    dispatch({ type: DELETE_DECK, deckId });
    const { decks } = getState().deck;
    await AsyncStorage.setItem('decks', JSON.stringify(decks));
  };
};

export const addCardAction = (deckId, card) => {
  return async (dispatch, getState) => {
    dispatch({
      type: ADD_CARD,
      deckId,
      card
    });
    const { decks } = getState().deck;
    await AsyncStorage.setItem('decks', JSON.stringify(decks));
  };
};
