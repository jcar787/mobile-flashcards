import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
  }
  render() {
    const { question, answer } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add New Card</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.labelInput}>Question</Text>
          <TextInput
            style={styles.input}
            value={question}
            onChangeText={question => this.setState({ question })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelInput}>Answer</Text>
          <TextInput
            style={styles.input}
            value={answer}
            onChangeText={answer => this.setState({ answer })}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    marginTop: 0,
    alignItems: 'center'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
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
  labelInput: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'midnightblue',
    marginBottom: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
    flex: 1,
    marginLeft: 25
  },
  input: {
    borderColor: 'midnightblue',
    borderWidth: 2,
    alignSelf: 'center',
    height: 40,
    padding: 5,
    borderRadius: 3,
    flex: 2,
    marginRight: 25,
    fontSize: 22
  },
  button: {
    borderColor: 'midnightblue',
    borderWidth: 2,
    borderRadius: 3
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

export default AddCard;
