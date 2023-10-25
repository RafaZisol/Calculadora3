import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      result: '',
      operator: '',
      currentNumber: '',
    };
  }

  handleNumberClick = (number) => {
    this.setState((prevState) => ({
      input: prevState.input + number,
      currentNumber: prevState.currentNumber + number,
    }));
  };

  handleOperatorClick = (operator) => {
    if (this.state.currentNumber !== '') {
      this.setState((prevState) => ({
        input: prevState.input + operator,
        operator: operator,
        currentNumber: '',
      }));
    }
  };

  handleClear = () => {
    this.setState({
      input: '',
      result: '',
      operator: '',
      currentNumber: '',
    });
  };

  handleCalculate = () => {
    if (this.state.operator === '√') {
      this.setState((prevState) => ({
        input: prevState.input + '=',
        result: Math.sqrt(parseFloat(prevState.currentNumber)).toFixed(2),
        currentNumber: '',
        operator: '',
      }));
    } else if (this.state.operator === 'sin') {
      this.setState((prevState) => ({
        input: prevState.input + '=',
        result: Math.sin(parseFloat(prevState.currentNumber)*(Math.PI/180)).toFixed(2),
        currentNumber: '',
        operator: '',
      }));
    } else if (this.state.operator === 'cos') {
      this.setState((prevState) => ({
        input: prevState.input + '=',
        result: Math.cos(parseFloat(prevState.currentNumber)*(Math.PI/180)).toFixed(2),
        currentNumber: '',
        operator: '',
      }));
    } else if (this.state.operator === 'tan') {
      this.setState((prevState) => ({
        input: prevState.input + '=',
        result: Math.tan(parseFloat(prevState.currentNumber)*(Math.PI/180)).toFixed(2),
        currentNumber: '',
        operator: '',
      }));
    } else {
      try {
        this.setState((prevState) => ({
          input: prevState.input + '=',
          result: eval(prevState.input).toFixed(2),
          currentNumber: '',
          operator: '',
        }));
      } catch (error) {
        this.setState({
          result: 'Error',
        });
      }
    }
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="0"
          value={this.state.input}
          editable={false}
        />
        <View style={styles.buttonRow}>
          <Button title="7" onPress={() => this.handleNumberClick('7')} />
          <Button title="8" onPress={() => this.handleNumberClick('8')} />
          <Button title="9" onPress={() => this.handleNumberClick('9')} />
          <Button title="/" onPress={() => this.handleOperatorClick('/')} />
        </View>
        <View style={styles.buttonRow}>
          <Button title="4" onPress={() => this.handleNumberClick('4')} />
          <Button title="5" onPress={() => this.handleNumberClick('5')} />
          <Button title="6" onPress={() => this.handleNumberClick('6')} />
          <Button title="*" onPress={() => this.handleOperatorClick('*')} />
        </View>
        <View style={styles.buttonRow}>
          <Button title="1" onPress={() => this.handleNumberClick('1')} />
          <Button title="2" onPress={() => this.handleNumberClick('2')} />
          <Button title="3" onPress={() => this.handleNumberClick('3')} />
          <Button title="-" onPress={() => this.handleOperatorClick('-')} />
        </View>
        <View style={styles.buttonRow}>
          <Button title="0" onPress={() => this.handleNumberClick('0')} />
          <Button title="C" onPress={this.handleClear} />
          <Button title="=" onPress={this.handleCalculate} />
          <Button title="+" onPress={() => this.handleOperatorClick('+')} />
        </View>
        <View style={styles.buttonRow}>
          <Button title="√" onPress={() => this.handleOperatorClick('√')} />
          <Button title="^" onPress={() => this.handleOperatorClick('^')} />
          <Button title="sin" onPress={() => this.handleOperatorClick('sin')} />
          <Button title="cos" onPress={() => this.handleOperatorClick('cos')} />
          <Button title="tan" onPress={() => this.handleOperatorClick('tan')} />
        </View>
        <Text style={styles.result}>Resultado: {this.state.result}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 24,
    textAlign: 'right',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  result: {
    fontSize: 24,
    textAlign: 'right',
  },
});

export default Calculator;
