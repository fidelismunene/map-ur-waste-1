import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import WasteSubmissionScreen from './screens/WasteSubmissionScreen';
import CollectorScreen from './screens/CollectorScreen';
import AdminDashboardScreen from './screens/AdminDashboardScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Waste Submission" component={WasteSubmissionScreen} />
        <Stack.Screen name="Collector" component={CollectorScreen} />
        <Stack.Screen name="Admin Dashboard" component={AdminDashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;