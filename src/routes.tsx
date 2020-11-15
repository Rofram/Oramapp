import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Login from './pages/Landing';
import PreRegistration from './pages/PreRegistration';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#468537' } }}>
                <Screen 
                    name="Login" 
                    component={Login} 
                />
                <Screen 
                    name="PreRegistration" 
                    component={PreRegistration} 
                    options={{
                        headerShown: true,
                        header: () => <Header title='Pré-Cadastro' />
                    }}
                />
                <Screen 
                    name="DashBoard" 
                    component={Dashboard} 
                />
            </Navigator>
        </NavigationContainer>
    );
}