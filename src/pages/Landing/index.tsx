import React from 'react';
import { View, Text } from 'react-native';

import TinderCards from '../../components/TinderCards';

import styles from './styles';
// import { BorderlessButton, TextInput } from 'react-native-gesture-handler';

export default function Login() {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.label} >Login</Text>
            <TextInput style={styles.input} placeholder='Digite seu CPF' />
            <TextInput style={styles.input} placeholder='Digite sua Senha' />
            <BorderlessButton style={styles.borderlessButtonContainer} >
                <Text style={styles.textBorderlessButton} >esqueceu sua senha?</Text>
            </BorderlessButton> */}
            <TinderCards />
        </View>
    );
}