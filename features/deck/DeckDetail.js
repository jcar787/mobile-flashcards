import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default props => {
  const { navigation } = props;
  const { id } = navigation.state.params;
  return (
    <View>
      <Text>Deck Detail with id {id}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddCard', { deckId: id })}
      >
        <Text>Add Card</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};
