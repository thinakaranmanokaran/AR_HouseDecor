import { View, Text } from 'react-native'
import React from 'react'
import './global.css';
import { LandingPage } from './src/components';

const App = () => {
    return (
        <View>
            {/* <Text>App</Text> */}
            <LandingPage />
        </View>
    )
}

export default App