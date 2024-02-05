import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useLayoutEffect } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import Bundle from './Bundle'
import Services from './Services'
import Account from './Account'
import HomePage from './HomePage'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faPuzzlePiece} from '@fortawesome/free-solid-svg-icons'
import {faCube} from '@fortawesome/free-solid-svg-icons'





const Stack = createBottomTabNavigator() 
const Main = ({navigation}) => {
    useLayoutEffect(()=>{
   navigation.setOptions({
    headerShown:false,
   })
    },[])
  return (
    <Stack.Navigator>
        <Stack.Screen 
        component={HomePage} 
        name="Home" 
        options={{tabBarIcon:()=> <FontAwesomeIcon icon={faHouse} />}}
        />
        <Stack.Screen 
        component={Bundle} 
        name="Bundle"
        options={{tabBarIcon:()=> <FontAwesomeIcon icon={faPuzzlePiece} />}}
        />
        <Stack.Screen 
        component={Services} 
        name="Services"
        options={{tabBarIcon:()=> <FontAwesomeIcon icon={faCube} />}}
        />
        <Stack.Screen
         component={Account}
          name="Account"
          options={{tabBarIcon:()=> <FontAwesomeIcon icon={faUser} />}}
          />


    </Stack.Navigator>
  )
}

export default Main