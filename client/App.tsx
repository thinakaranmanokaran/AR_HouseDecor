import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { GestureHandlerRootView } from "react-native-gesture-handler"; // Wrap the app with this
// import { enableScreens } from "react-native-screens"; // Enable native screens
// enableScreens();

import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();
import { LandingPage, ThreeDScreen } from "./src/components";

// const Stack = createStackNavigator();

export default function App() {
    return (
            <NavigationContainer>
                {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Landing" component={LandingPage} />
                    <Stack.Screen name="Home" component={ThreeDScreen} />
                </Stack.Navigator> */}
                <LandingPage />
                {/* <H /> */}
            </NavigationContainer>
    ); 
}

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//     return (
//         <View>
//             <ThreeDScreen />
//         </View>
//     )
// }

// export default App

// const styles = StyleSheet.create({})