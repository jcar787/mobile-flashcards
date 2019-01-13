import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
  buttonText: {
    borderColor: 'midnightblue',
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: 'midnightblue',
    color: 'white',
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default props => {
  const { navigation } = props;
  const { id } = navigation.state.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deck Detail with id {id}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddCard', { deckId: id })}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
