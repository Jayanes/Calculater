import React from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome Home</Text>
      </View>

      <View style={styles.button}>
        <Button
          title="Go to counter"
          onPress={() => navigation.navigate('Counter', {name: 'Counter'})}
        />

        <Button
          title="Go to Calculator"
          onPress={() =>
            navigation.navigate('Calculator', {name: 'Calculater !!'})
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
  },
  textContainer: {
    // flex: 2,
    width: '100%',
    height:200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#131734',
    fontSize: 40,
    fontWeight: 'bold',
    
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default HomeScreen;
