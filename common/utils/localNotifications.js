import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'MobileFlashcards:Notifications';

export const clearLocalNotifications = async () => {
  await AsyncStorage.removeItem(NOTIFICATION_KEY);
  return Notifications.cancelAllScheduledNotificationsAsync();
};

const createNotification = () => {
  return {
    title: 'Quiz Time!',
    body: "You haven't take a quiz yet! 😒",
    ios: {
      sound: true
    },
    android: {
      sound: true
    }
  };
};

export const setLocalNotifications = async () => {
  console.log(new Date());
  let notification = await AsyncStorage.getItem(NOTIFICATION_KEY);
  notification = JSON.parse(notification);
  console.log(notification);
  if (notification === null) {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status === 'granted') {
      Notifications.cancelAllScheduledNotificationsAsync();
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(20);
      tomorrow.setMinutes(0);
      tomorrow.setSeconds(0);
      Notifications.scheduleLocalNotificationAsync(createNotification(), {
        time: tomorrow,
        repeat: 'day'
      });
      console.log(tomorrow);
      AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
    }
  }
};
