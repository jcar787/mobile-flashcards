import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { DeckList, DeckDetail } from './features/deck/';
import { Constants } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';

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
        <AppContainer />
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

const AppNavigator = createStackNavigator(
  {
    DeckList: {
      screen: DeckList
    },
    DeckDetail: {
      screen: DeckDetail
    }
  },
  { initialRouteName: 'DeckList' }
);

const AppContainer = createAppContainer(AppNavigator);
