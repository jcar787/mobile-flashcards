import { createStackNavigator, createAppContainer } from 'react-navigation';
import { DeckList, DeckDetail } from '../../features/deck';

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

export default createAppContainer(AppNavigator);
