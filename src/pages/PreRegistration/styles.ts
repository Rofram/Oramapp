import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    textInput: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },

    title: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 8
    },

    inputBlock: {
        width: '48%'
    },

    form: {
        marginTop: 40,
        paddingHorizontal: 20
    }
});

export default styles;