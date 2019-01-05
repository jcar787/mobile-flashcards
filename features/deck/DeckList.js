import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Deck from './Deck';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold'
  }
});

class DeckList extends Component {
  render() {
    const decks = [
      { id: 1, cards: 5, title: 'Test' },
      { id: 2, cards: 3, title: 'Test' },
      { id: 3, cards: 2, title: 'Test' },
      { id: 4, cards: 4, title: 'Test' },
      { id: 5, cards: 1, title: 'Test' }
    ];
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Decks</Text>
        {decks.map(deck => (
          <Deck
            key={deck.id}
            id={deck.id}
            title={deck.title}
            cards={deck.cards}
          />
        ))}
      </View>
    );
  }
}

export default DeckList;
