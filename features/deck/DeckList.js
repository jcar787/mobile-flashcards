import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Deck from './Deck';
import { FlatList } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    marginTop: 0
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1
  },
  list: {
    display: 'flex',
    flex: 1
  }
});

class DeckList extends Component {
  render() {
    const decks = [
      { id: 1, cards: 5, title: 'Test' },
      { id: 2, cards: 3, title: 'Test' },
      { id: 3, cards: 2, title: 'Test' },
      { id: 4, cards: 4, title: 'Test' },
      { id: 5, cards: 1, title: 'Test' },
      { id: 6, cards: 7, title: 'Test' },
      { id: 7, cards: 4, title: 'Test' },
      { id: 8, cards: 8, title: 'Test' },
      { id: 9, cards: 3, title: 'Test' },
      { id: 10, cards: 6, title: 'Test' },
      { id: 11, cards: 12, title: 'Test' }
    ];
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Decks</Text>
        <FlatList
          style={styles.list}
          data={decks}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item: deck }) => (
            <Deck
              key={deck.id}
              id={deck.id}
              title={deck.title}
              cards={deck.cards}
              navigation={this.props.navigation}
            />
          )}
        />
      </View>
    );
  }
}

export default DeckList;
