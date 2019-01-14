import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Deck from './Deck';
import { loadDecksAction } from './deckActions';

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
    color: 'midnightblue',
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
  },
  noDecks: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'midnightblue',
    marginTop: 20,
    marginBottom: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1
  }
});

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadDecksAction());
  }

  render() {
    const { decks } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Decks</Text>
        {decks && decks.length > 0 ? (
          <FlatList
            style={styles.list}
            data={decks}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({ item: deck }) => (
              <Deck
                key={deck.id}
                id={deck.id}
                title={deck.name}
                cards={deck.cards.length}
                navigation={this.props.navigation}
              />
            )}
          />
        ) : (
          <Text style={styles.noDecks}>No Decks 😒</Text>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  let decks = state.deck && state.deck.decks ? state.deck.decks : [];

  return {
    decks
  };
};

export default connect(mapStateToProps)(DeckList);
