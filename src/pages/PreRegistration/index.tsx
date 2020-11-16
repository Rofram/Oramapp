import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import Background from "../../components/Background";

import styles from "./styles";


export default function PreRegistration() {
  return (
        <Background colors={[ '#43862f', '#01b277' ]} >
            <View style={styles.container}>
                <View style={styles.form} >
                    <View style={styles.}></View>
                    <Text style={styles.title}>Como Você gostaria de ser Chamado?</Text>
                    <TextInput style={styles.textInput} placeholder="Digite aqui" />
                    <Text style={styles.title}>Qual a data do seu Nascimento?</Text>
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <TextInput style={styles.textInput} placeholder="Dia" />
                        </View>
                        <View style={styles.inputBlock}>
                            <TextInput style={styles.textInput} placeholder="Mês" />
                        </View>
                        <View style={styles.inputBlock}>
                            <TextInput style={styles.textInput} placeholder="Ano" />
                        </View>
                    </View>
                </View>
            </View>
        </Background>
  );
}
