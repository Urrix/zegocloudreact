import { Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screen/HomeScreen'
import VideoCallScreen from './screen/VideoCallScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View>
       <NavigationContainer>
       <Stack.Navigator initialRouteName='home'>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="VideoCallScreen" component={VideoCallScreen} />
    </Stack.Navigator>
       </NavigationContainer>
    </View>
  )
}

export default App
