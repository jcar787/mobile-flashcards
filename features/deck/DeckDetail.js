import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default props => {
  const { id } = props.navigation.state.params;
  return (
    <View>
      <Text>Deck Detail with id {id}</Text>
      <TouchableOpacity>
        <Text>Add Card</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};
