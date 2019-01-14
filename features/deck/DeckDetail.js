import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { deleteDeckAction } from './deckActions';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    marginTop: 0,
    alignItems: 'center'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'midnightblue',
    marginTop: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1
  },
  button: {
    borderColor: 'midnightblue',
    borderWidth: 2,
    borderRadius: 3,
    marginLeft: 15
  },
  buttonDisabled: {
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 3,
    marginLeft: 15
  },
  buttonTextDisabled: {
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: 'gray',
    color: 'white',
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonText: {
    borderColor: 'midnightblue',
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: 'midnightblue',
    color: 'white',
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold'
  },
  delete: {
    color: 'red',
    fontSize: 16
  }
});

const onDelete = (dispatch, deckId, navigation) => {
  dispatch(deleteDeckAction(deckId));
  navigation.navigate('Home');
};
const DeckDetail = props => {
  const { cardsLength, navigation, dispatch } = props;
  const { id, title } = navigation.state.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddCard', { deckId: id })}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={cardsLength === 0}
          onPress={() => {
            if (cardsLength > 0) {
              navigation.navigate('Quiz', { deckId: id });
            }
          }}
          style={cardsLength > 0 ? styles.button : styles.buttonDisabled}
        >
          <Text
            style={
              cardsLength > 0 ? styles.buttonText : styles.buttonTextDisabled
            }
          >
            Start Quiz
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => onDelete(dispatch, id, navigation)}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state, props) => {
  const { navigation } = props;
  const { id } = navigation.state.params;
  const [deck] = state.deck.decks.filter(deck => deck.id === id);
  const cardsLength = deck.cards.length;

  return {
    cardsLength
  };
};

export default connect(mapStateToProps)(DeckDetail);
