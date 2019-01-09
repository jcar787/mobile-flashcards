import React from 'react';
import { StyleSheet, StatusBar, View, Text } from 'react-native';
import { Constants } from 'expo';
import { NavigationContainer } from './common/navigation';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <View
          style={{
            height: Constants.statusBarHeight,
            backgroundColor: 'midnightblue'
          }}
        >
          <StatusBar
            translucent
            barStyle="light-content"
            backgroundColor="midnightblue"
          />
        </View>
        <NavigationContainer />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    alignSelf: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1
  }
});
