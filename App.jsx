import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/Login'
import Main from './src/Main'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()


const App = () => {
  return (
    <NavigationContainer>

    <Stack.Navigator>
      <Stack.Screen component={Login} name='Login' />
      <Stack.Screen component={Main} name='Main' />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App