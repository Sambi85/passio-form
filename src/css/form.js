import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    textStyle: {
      fontSize: 20
    },
    header: {
      fontSize: 40,
      alignSelf: 'center'
    },
    subHeader: {
      fontSize: 40
    },
    errorMessage: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'red'
    },
    pickerView: {
        top:200,
        alignSelf: 'center'
    },
    picker: {
      height: 50, 
      width: 150 
    },
    imperialHeight: {
        flexDirection: 'row'
    },
    somView: {
      alignSelf: 'center',
      flexDirection: 'row',
      right: 5
    },
    weight: {
      left: 5
    },
    height: {
      left: 10
    },
    inches: {
      left: 15
    },
    buttonView: {
      top: 300,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#007AFF',
      borderRadius: 8,
      height: 50,
      width: 140,
      padding: 5
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        top: 6
    }
  });

export default styles;
  