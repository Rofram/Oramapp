import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Login from './pages/Landing';
import PreRegistration from './pages/PreRegistration';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Investments from './pages/Investments';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen 
                    name="Login" 
                    component={Login} 
                />
                <Screen 
                    name="PreRegistration" 
                    component={PreRegistration} 
                />
                <Screen 
                    name="DashBoard" 
                    component={Dashboard} 
                />

                <Screen
                    name="Investments"
                    component={Investments}
                />
            </Navigator>
        </NavigationContainer>
    );
}