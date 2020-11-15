import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 40,
        paddingBottom: 80,
    },

    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: '90%',
        resizeMode: 'contain',
    },

    button: {
        backgroundColor: '#fff',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 40,
    },

    textButton: {
        color: '#468537',
        fontFamily: 'Roboto_700Bold'
    },

    input: {
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 50,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: 'top',
    },

    label: {
        color: '#000',
        fontFamily: '',
        marginBottom: 8,
        fontSize: 18,
    },

    textBorderlessButton: {
        alignItems: 'center',
        textDecorationLine: 'underline'
    }
});

export default styles;