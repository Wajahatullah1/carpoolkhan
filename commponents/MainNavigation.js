import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from '../screens/Account';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomePage from '../screens/HomePage';
import BookRider from '../screens/BookRider';
import OfferRide from '../screens/OfferRide';

const MainNavigation = () => {
    
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="AccountPage">
    <Stack.Screen
        name="AccountPage"
        component={Account}
        options={{
            headerShown: false,
        }}
      />
      <Stack.Screen
        name="LoginPage"
        component={Login}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />
       <Stack.Screen
        name="SignUpPage"
        component={SignUp}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />

<Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />
        <Stack.Screen
        name="BookRider"
        component={BookRider}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="OfferRide"
        component={OfferRide}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})