import { LOAD_DECKS, ADD_DECK, DELETE_DECK, ADD_CARD } from './deckConstants';

const initialState = { decks: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DECKS:
      return { ...state, decks: action.decks };
    case ADD_DECK:
      const { deck } = action;
      console.log(deck);
      return {
        ...state,
        decks: state.decks.concat(deck)
      };
    case DELETE_DECK:
      return {
        ...state,
        decks: state.decks.filter(deck => deck.id !== action.deckId)
      };
    case ADD_CARD:
      const decks = state.decks.filter(d => d.id !== action.deckId);
      const [newDeck] = state.decks.filter(d => d.id === action.deckId);
      newDeck.cards = newDeck.cards.concat(action.card);
      return {
        ...state,
        decks: decks.concat(newDeck)
      };
    default:
      return state;
  }
};
