import React from 'react';
import {Text,View, TextInput} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import t from 'tcomb-form-native'

const Form = t.form.Form;

var HackFields = t.struct({
    firstname: t.String,
    lastname: t.String,
    business: t.String,
    orderTime: t.String,
    fee: t.Number,
    deliveryLocation: t.String,
    deliveryTime: t.String,
    ordersAvailable: t.Number
    })

var options = {} //Optional rendering options (see online documentation for tcomb-form-native)


export default class CreateHackForm extends React.Component {
    state = {
        error: undefined

    }

    handleClick = () => {
        console.log("Hi")
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
            </View>
        );
    }
}