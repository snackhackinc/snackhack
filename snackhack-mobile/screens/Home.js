import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  Dimensions
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
      toggleShow = () => {
        this.setState(state => ({ showForm: !state.showForm }));
      }
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style = {{flex:1}}>
          <View>
            <Text style={title.title}>SnackHack</Text>
          </View>
            <ScrollView 
              style={{flex:1}} 
            >
              {!this.state.showForm  && <CreateHackButton show = {this.toggleShow} style = {button.buttonStyle}/>}
              {this.state.showForm && <CreateHackForm show = {this.toggleShow} />}
              
            </ScrollView>
          
        </View>

    );
  }
}