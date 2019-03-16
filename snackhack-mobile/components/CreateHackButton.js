import React from 'react';
import {
    Text,
    TouchableOpacity,
  } from 'react-native';
export default class CreateHackButton extends React.Component {
    state = {
        error: undefined,
        showForm: false

    }
    render(){
        return (
        <TouchableOpacity>
          <Text>
          Create a Hack
          </Text>
        </TouchableOpacity>
      );
    }
}