import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { Constants } from 'expo';
import { NavigationContainer } from './common/navigation';

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
        <NavigationContainer />
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
