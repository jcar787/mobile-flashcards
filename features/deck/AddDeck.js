import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class AddDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  onChange = e => {};
  render() {
    const { name } = this.state;
    return (
      <View>
        <Text>Add New Deck</Text>
        <Text>Title</Text>
        <TextInput
          value={name}
          onChangeText={name => this.setState({ name })}
        />
        <TouchableOpacity>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddDeck;
