import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props => {
  const { id, cards, title } = props;
  return (
    <View style={styles.deck}>
      <Text style={styles.title}>
        {title} {id}
      </Text>
      <Text>{cards} cards</Text>
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
