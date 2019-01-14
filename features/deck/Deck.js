import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default props => {
  const { id, cards, title, navigation } = props;
  return (
    <View style={styles.deck}>
      <TouchableOpacity
        onPress={() => navigation.navigate('DeckDetail', { id, title })}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cards}>{cards} cards</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  deck: {
    borderWidth: 3,
    borderColor: 'midnightblue',
    backgroundColor: 'midnightblue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
    borderRadius: 10,
    marginLeft: 75,
    marginRight: 75,
    marginBottom: 10,
    marginTop: 10,
    padding: 25
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },

  cards: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    color: 'white'
  }
});
