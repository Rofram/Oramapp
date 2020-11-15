import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'center',
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

    borderlessButtonContainer: {
        
    },

    textBorderlessButton: {
        alignItems: 'center',
        textDecorationLine: 'underline'
    }
});

export default styles;