import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default props => {
  const {
    card,
    markAsCorrect,
    markAsIncorrect,
    changeShowAnswer,
    showAnswer
  } = props;

  return (
    <View>
      <Text style={styles.title}>
        {showAnswer ? card.answer : card.question}
      </Text>
      <TouchableOpacity onPress={() => changeShowAnswer()}>
        <Text style={styles.answer}>Answer</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonCorrect}
          onPress={() => markAsCorrect()}
        >
          <Text style={styles.buttonCorrectText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonIncorrect}
          onPress={() => markAsIncorrect()}
        >
          <Text style={styles.buttonIncorrectText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
  buttonIncorrect: {
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 3,
    marginLeft: 15
  },
  buttonIncorrectText: {
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: 'red',
    color: 'white',
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonCorrect: {
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 3,
    marginLeft: 15
  },
  buttonCorrectText: {
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: 'green',
    color: 'white',
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold'
  },
  answer: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});
