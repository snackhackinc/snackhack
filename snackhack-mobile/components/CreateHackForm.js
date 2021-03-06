import React from 'react';
import {Text,View, TextInput, TouchableOpacity} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import t from 'tcomb-form-native'
import { text, button} from './StyleSheet';

const Form = t.form.Form;

var HackFields = t.struct({
    firstname: t.String,
    lastname: t.String,
    // business: t.String,
    // orderTime: t.Date,
    // fee: t.Number,
    // deliveryLocation: t.String,
    // deliveryTime: t.Date,
    // ordersAvailable: t.Number
    })

var options = {} //Optional rendering options (see online documentation for tcomb-form-native)


export default class CreateHackForm extends React.Component {
    state = {
        error: undefined

    }

    handleClick = () => {
        var value = this.refs.form.getValue();
        return fetch('https://f389gs7mlk.execute-api.us-east-2.amazonaws.com/default/createHack', {  
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              value
            })
          })
        .then((response) => response.json())
        .then((responseJson) => {
        console.log(responseJson)
        return responseJson;
        })
        .catch((error) => {
        console.error(error);
        });
    }

    handleCreateHackForm = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        console.log(option)
    };

    render(){
        return (
            <View>
                <Form
                ref = "form"
                type = {HackFields}
                options = {options}
                >
                </Form>
                <TouchableOpacity onPress = {this.handleClick} style = {button.buttonStyle}>
                    <Text style = {text.textStyle}>
                        Post My Hack!
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}