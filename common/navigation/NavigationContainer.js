import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';
import { DeckList, DeckDetail, AddDeck } from '../../features/deck';
import { AddCard } from '../../features/card';

const Tabs = createBottomTabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Deck List'
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck'
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#FFF',
      inactiveTintColor: '#CCC'
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
    }
  },
  { initialRouteName: 'Home' }
);

export default createAppContainer(AppNavigator);
