import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default props => {
  const { id, cards, title } = props;
  return (
    <View style={styles.deck}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('DeckDetail', { id })}
      >
        <Text style={styles.title}>
          {title} {id}
        </Text>
        <Text>{cards} cards</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  deck: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 5,
    marginBottom: 5,
    padding: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
