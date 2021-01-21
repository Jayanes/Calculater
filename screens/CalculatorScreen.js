import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import CalcButton from '../components/CalcButton';
import CalcDisplay from '../components/CalcDisplay';
import DisplayEquation from '../components/DisplayEquation';

const CalculatorScreen = () => {
  const [dispaly, setDisplay] = useState('');
  const [result, setResult] = useState(0);
  const [arithmaticOpeartions, setArithmaticOpeartions] = useState([
    '+',
    '-',
    '/',
    'x',
    '.',
  ]);

  const digitPress = (digit) => {
    setDisplay(dispaly + digit);
  };

  const ClearPress = () => {
    setDisplay('');
    setResult(0);
  };

  const DeletePress = () => {
    if (dispaly.length > 0) {
      const splitText = dispaly.split('');
      splitText.pop();
      setDisplay(splitText.join(''));
    }
  };
  const operationBtnPress = (operation) => {
    if (dispaly !== '') {
      const lastIndex = dispaly.length > 0 ? dispaly.split('').pop() : dispaly;
      if (arithmaticOpeartions.indexOf(lastIndex) <= 0) {
        setDisplay(dispaly + operation);
      }
    }
  };

  const calculateResult = () => {
    const solution = eval(dispaly);
    setResult(solution);
    setDisplay(solution);
  };

  const percentageBtnPress = () => {
    const solution = eval(dispaly);
    setDisplay(solution / 100);
    setResult(solution / 100);
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <DisplayEquation dispaly={dispaly} />
      </View>

      <View style={styles.displayContainer}>
        <CalcDisplay dispaly={result} />
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <CalcButton
            onPress={() => ClearPress()}
            title="AC"
            color="white"
            backgroundColor="#9E906B"
          />
          <CalcButton
            onPress={() => DeletePress()}
            title="DEL"
            color="white"
            backgroundColor="#9E906B"
          />
          <CalcButton
            onPress={() => percentageBtnPress()}
            title="%"
            color="white"
            backgroundColor="#9E906B"
          />
          <CalcButton
            onPress={() => operationBtnPress('/')}
            title="/"
            color="white"
            backgroundColor="#9E906B"
          />
        </View>
        <View style={styles.buttonRow}>
          <CalcButton
            onPress={() => digitPress('7')}
            title="7"
            color="white"
            backgroundColor="#455A64"
          />
          <CalcButton
            onPress={() => digitPress('8')}
            title="8"
            color="white"
            backgroundColor="#455A64"
          />
          <CalcButton
            onPress={() => digitPress('9')}
            title="9"
            color="white"
            backgroundColor="#455A64"
          />
          <CalcButton
            onPress={() => operationBtnPress('*')}
            title="x"
            color="white"
            backgroundColor="#9E756B"
          />
        </View>
        <View style={styles.buttonRow}>
          <CalcButton
            onPress={() => digitPress('4')}
            title="4"
            color="white"
            backgroundColor="#455A64"
          />
          <CalcButton
            onPress={() => digitPress('5')}
            title="5"
            color="white"
            backgroundColor="#455A64"
          />
          <CalcButton
            onPress={() => digitPress('6')}
            title="6"
            color="white"
            backgroundColor="#455A64"
          />
          <CalcButton
            onPress={() => operationBtnPress('-')}
            title="-"
            color="white"
            backgroundColor="#9E756B"
          />
        </View>
        <View style={styles.buttonRow}>
          <CalcButton
            onPress={() => digitPress('1')}
            title="1"
            color="white"
            backgroundColor="#455A64"
          />
          <CalcButton
            onPress={() => digitPress('2')}
            title="2"
            color="white"
            backgroundColor="#455A64"
          />
          <CalcButton
            onPress={() => digitPress('3')}
            title="3"
            color="white"
            backgroundColor="#455A64"
          />
          <CalcButton
            onPress={() => operationBtnPress('+')}
            title="+"
            color="white"
            backgroundColor="#9E756B"
          />
        </View>
        <View style={styles.buttonRow}>
          <CalcButton
            onPress={() => digitPress('0')}
            title="0"
            color="white"
            backgroundColor="#455A64"
            style={{flex: 2}}
          />
          <CalcButton
            onPress={() => digitPress('.')}
            title="."
            color="white"
            backgroundColor="#455A64"
          />
          <CalcButton
            onPress={() => calculateResult()}
            title="="
            color="white"
            backgroundColor="#9E756B"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  buttonContainer: {
    paddingBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CalculatorScreen;
