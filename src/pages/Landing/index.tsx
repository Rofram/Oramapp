import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Logo from '../../images/LogoOrama2.png';

import styles from './styles';
// import { BorderlessButton, TextInput } from 'react-native-gesture-handler';

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer} >
                <Image source={Logo} style={styles.logo} />
            </View>
            <View>
                <RectButton style={styles.button} >
                    <Text style={styles.textButton}>Login</Text>
                </RectButton>
                <RectButton style={styles.button}>
                    <Text style={styles.textButton}>Cadastrar</Text>
                </RectButton>
            </View>
        </View>
    );
}