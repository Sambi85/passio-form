import React from 'react';
import styles from '../css/home';
import { Text, View, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to Form"
        onPress={() => navigation.navigate('FormScreen')}
      />
    </View>
  );
}

export default HomeScreen;
