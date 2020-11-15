import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      container: {
        flex: 1
      },

      swiperContainer: {
        flex: 0.55
      },

      card: {
        flex: 0.85,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'white'
      },

      text: {
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'transparent',
      },
      
      done: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'transparent'
      }
});

export default styles;