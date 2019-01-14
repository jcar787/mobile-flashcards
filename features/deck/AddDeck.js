import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { addDeckAction } from './deckActions';

class AddDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  onSubmit = () => {
    const { dispatch, navigation } = this.props;
    const deck = {
      id: uuidv4(),
      name: this.state.name,
      cards: []
    };

    this.setState({
      name: ''
    });

    dispatch(addDeckAction(deck));
    navigation.goBack();
  };
  render() {
    const { name } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add New Deck</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.labelInput}>Title</Text>
          <TextInput
            value={name}
            onChangeText={name => this.setState({ name })}
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => this.onSubmit()}>
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
    fontSize: 24,
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
    fontSize: 24
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

export default connect()(AddDeck);
