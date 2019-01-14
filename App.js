import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import { NavigationContainer } from './common/navigation';
import configureStore from './store/configureStore';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
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
