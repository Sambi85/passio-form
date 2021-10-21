import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    textStyle: {
      fontSize: 20
    },
    header: {
      top: 35,
      fontSize: 40,
      fontWeight: 'bold',
      color: 'white',
      alignSelf: 'center'
    },
    subHeader: {
      fontSize: 40
    },
    weightText: {
      left: 10,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    },
    heightText: {
      left: 25,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    },
    inchesText: {
      left: 35,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    },
    errorMessage: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'red'
    },
    pickerView: {
        top:170,
        alignSelf: 'center'
    },
    picker: {
      height: 50, 
      width: 150,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    },
    pickerItem: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    },
    imperialHeight: {
        flexDirection: 'row'
    },
    somView: {
      top: 110,
      alignSelf: 'center',
      flexDirection: 'row',
      right: 5
    },
    weight: {
      left: 3
    },
    height: {
      left: 18
    },
    inches: {
      left: 30
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
    },
    background: {
      width: '100%',
      height: '100%',
      opacity: 0.9
    }
  });

export default styles;
  