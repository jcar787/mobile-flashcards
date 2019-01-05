import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { DeckList } from './features/deck/';
import { Constants } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: Constants.statusBarHeight }}>
          <StatusBar
            translucent
            barStyle="light-content"
            backgroundColor="#292477"
          />
        </View>
        <DeckList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
