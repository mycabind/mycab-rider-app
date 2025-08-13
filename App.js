/* eslint-disable prettier/prettier */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { VerifyOtp, Welcome , MobileNumber} from './src/screens/auth'
import { Home } from './src/screens/home'
import { Profile ,ProfileInfo} from './src/screens/profile_sc'
import { Addresses } from './src/screens/profile_sc/ManageAddress'

const App = () => {
  const Stack = createNativeStackNavigator(); 
  return (   
    <NavigationContainer>            
      <Stack.Navigator initialRouteName='Addresses' screenOptions={{headerShown: false}}>
        <Stack.Screen name='MobileNumber' component={MobileNumber}/>
        <Stack.Screen name='VerifyOtp' component={VerifyOtp}/>
        <Stack.Screen name='Name' component={Welcome}/>  
        <Stack.Screen name='Home' component={Home}/>  
        <Stack.Screen name='Profile' component={Profile}/>  
        
        {/* screens navigation for Profile screen options */}
        <Stack.Screen name='ProfileInfo' component={ProfileInfo}/>

        {/* Screen navigation for Manage Address  */}

        <Stack.Screen name="Addresses" component={Addresses} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App; 