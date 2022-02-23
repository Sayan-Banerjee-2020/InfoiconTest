import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/home';


const Stack = createStackNavigator();


export default class MyNavigator extends Component {
    render() {
        return (

            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="home" component={Home} initialRouteName="home" />
            </Stack.Navigator>


        )
    }
}