import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import CreateHackForm from "../components/CreateHackForm";
import CreateHackButton from "../components/CreateHackButton";
import {container, title, text, button, welcome} from "../components/StyleSheet";

export default class Home extends React.Component {
    state = {
        error: undefined,
        showForm: false
    }
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={container.container}>
        <ScrollView style={container.container} contentContainerStyle={container.container}>
          <View style={welcome.welcomeContainer}>
          <Text style={title.title}>SnackHack</Text>
          </View>
          <View style={container.container}>
          {!this.state.showForm  && <CreateHackButton style = {button.buttonStyle}/>}
          {!this.state.showForm && <CreateHackForm />}
          </View>
        </ScrollView>
      </View>

    );
  }
}