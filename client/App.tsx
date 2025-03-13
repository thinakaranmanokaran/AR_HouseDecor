import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { LandingPage, ThreeDScreen } from './src/components';
import './global.css'
// import LandingPage from './screens/LandingPage'; // Ensure the path is correct
// import HomeScreen from './screens/HomeScreen'; // Replace with your actual Home screen

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing">
                <Stack.Screen 
                    name="Landing" 
                    component={LandingPage} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="Home" 
                    component={ThreeDScreen} 
                    options={{ headerShown: false }}  
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
