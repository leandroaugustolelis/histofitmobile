import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Main from '../components/Main';
import FriendsList from '../components/FriendsList';
import PublishPost from '../pages/PublishPost';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Main" component={Main} />
    <App.Screen name="FriendsList" component={FriendsList} />
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="PublishPost" component={PublishPost} />
  </App.Navigator>
);

export default AppRoutes;
