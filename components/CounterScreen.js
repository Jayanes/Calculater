import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import CalcButton from './CalcButton';

const ProfileScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.common.counter);

  const incrementCounter = () => {
    dispatch({type: "INCREMENT"});
  };

  const decrementtCounter = () => {
    dispatch({type: "DECREMENT"});
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <Text style={styles.header}> {route.params.name}</Text>
      </View>
      
      <View style={styles.counterContainer}>
      <Text style={styles.counter}>{counter}</Text>
      </View>
      
      <View style={styles.button}>
      <CalcButton
        onPress={() => incrementCounter()}
        title="+"
        color="white"
        backgroundColor="#9E906B"
      />

      <CalcButton
        onPress={() => decrementtCounter()}
        title="-"
        color="white"
        backgroundColor="#9E906B"
      />
      </View>
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  header: {
    color: '#131734',
    fontSize: 40,
    fontWeight: 'bold'
  },
  headerContainer: {
    justifyContent:'center',
    alignItems: 'center',
  
  },
  counterContainer: {
    justifyContent:'center',
    alignItems: 'center',
  },
  counter: {
      color: '#635C28',
      fontSize: 60,
      fontWeight: 'bold'
  },
  button: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
  }
})
export default ProfileScreen;
