/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet
} from 'react-native';
import CalculatorScreen from './screens/CalculatorScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import CounterScreen from './components/CounterScreen';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import rootReducer from './reducers';
// import  InitializeApp  from './utils/InitializeApp'

const Stack = createStackNavigator();
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#212544',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Counter" component={CounterScreen}  options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#212544',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />

    <Stack.Screen name="Calculator" component={CalculatorScreen}  options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#212544',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  body: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  img: {
    width: 100,
    height:100,
    borderRadius: 100/2
  },
  input: {
    height: 50,
    width:200,
    borderColor: 'gray',
    fontSize: 30,
    fontWeight: "bold",
    borderWidth: 2
  }
});

export default App;