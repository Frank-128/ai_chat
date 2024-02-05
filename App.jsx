
import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';
import Main from './src/screens/Main';
import {NavigationContainer} from '@react-navigation/native';
import RecoverPin from './src/screens/RecoverPin';
import OTPVerificication from './src/screens/OTPVerificication';
import HomePage from './src/screens/HomePage';
import ConfirmDetails from './src/screens/ConfirmDetails';
import TransactionSuccess from './src/screens/TransactionSuccess';
import TransactionFail from './src/screens/TransactionFail';
import SendMoney from "./src/screens/SendMoney";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator>
       
        <Stack.Screen
          component={Login}
          name="Login"
          options={{headerShown: false}}
        />
        <Stack.Screen component={Main} name="Main" />
        <Stack.Screen component={SendMoney} name="SendMoney" />
         <Stack.Screen component={ConfirmDetails} name="ConfirmDetails" />
        <Stack.Screen component={TransactionSuccess} name="TransactionSuccess" />
        <Stack.Screen component={TransactionFail} name="TransactionFail" />
       

        <Stack.Screen component={HomePage} name="HomePage" />
        <Stack.Screen component={OTPVerificication} name="OTPVerification" />
        <Stack.Screen component={RecoverPin} name="RecoverPin" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
