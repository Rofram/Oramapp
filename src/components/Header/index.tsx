import React from 'react';
import { Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
}


export default function Header({ title }: HeaderProps) {
    const navigation = useNavigation();



    return (
        <View style={styles.container}>
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name='arrow-left' size={24} color='rgb(99, 157, 49)' />
            </BorderlessButton>

            <Text style={styles.title}>{title}</Text>
        </View>
    );
}