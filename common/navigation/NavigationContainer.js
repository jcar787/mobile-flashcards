import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';
import { DeckList, DeckDetail, AddDeck } from '../../features/deck';
import { AddCard } from '../../features/card';
import Quiz from '../../features/quiz/Quiz';

const Tabs = createBottomTabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Deck List',
        title: 'Deck List'
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        title: 'Add Deck'
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'DeckList') {
          iconName = 'ios-list';
        } else {
          iconName = 'ios-add';
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeBackgroundColor: 'midnightblue',
      activeTintColor: 'white',
      inactiveBackgroundColor: 'white',
      inactiveTintColor: 'midnightblue',
      labelStyle: {
        fontSize: 14
      }
    }
  }
);

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Tabs
    },

    DeckDetail: {
      screen: DeckDetail
    },

    AddCard: {
      screen: AddCard
    },
    Quiz: {
      screen: Quiz
    }
  },
  { initialRouteName: 'Home' }
);

export default createAppContainer(AppNavigator);
