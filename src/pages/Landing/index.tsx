import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { LinearGradient } from 'expo';

import Background from "../../components/Background/index";

import Logo from "../../images/LogoOrama2.png";

import styles from "./styles";

export default function Login() {
  const { navigate } = useNavigation();

  function handleNavigateToPreRegistration() {
    navigate("PreRegistration");
  }

  function handleNavigateToLogin() {
    // POR ENQUANTO TA INDO PRA INVESTIMENTOS
    navigate("Investments");
  }

  return (
    <Background>
        <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={Logo} style={styles.logo} />
        </View>
        <View>
            <RectButton
                onPress={handleNavigateToLogin}
                style={styles.button}>
                <Text style={styles.textButton}>Login</Text>
            </RectButton>
            <RectButton
                onPress={handleNavigateToPreRegistration}
                style={styles.button}
            >
            <Text style={styles.textButton}>Cadastrar</Text>
            </RectButton>
        </View>
        </View>
    </Background>
  );
}
