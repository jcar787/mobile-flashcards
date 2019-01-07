import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

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
      <View>
        <Text>Add New Card</Text>
        <Text>Question</Text>
        <TextInput
          value={question}
          onChangeText={question => this.setState({ question })}
        />
        <Text>Answer</Text>
        <TextInput
          value={answer}
          onChangeText={answer => this.setState({ answer })}
        />
        <TouchableOpacity>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddCard;
