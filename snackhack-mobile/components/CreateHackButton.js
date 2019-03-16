import React from 'react';
import {
    Text,
    TouchableOpacity,
  } from 'react-native';
import { text, button} from './StyleSheet';
export default class CreateHackButton extends React.Component {
    render(){
        return (
        <TouchableOpacity onPress = {this.props.show} style = {button.buttonStyle}>
          <Text style = {text.textStyle}>
          Create a Hack
          </Text>
        </TouchableOpacity>
      );
    }
}