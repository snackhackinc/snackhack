import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { WebBrowser } from 'expo';
import Create_a_Hack from './Create_a_Hack';
import { MonoText } from '../components/StyledText';

const Leave_Home = ({ onPress}) => {
  return (
    <TouchableOpacity onPress={() => this.props.navigation.navigate('Create_a_Hack')} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>
      Create a Hack
      </Text>
    </TouchableOpacity>
  );
};

export default class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
          <Text style={styles.title}>SnackHack</Text>
          </View>
          <View style={styles.container}>
          <Leave_Home/>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View>
      </View>

    );
  }
}

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: this
//   },
//   Create_a_Hack: {
//     screen: Create_a_Hack
//   }

// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
    padding: 50,
    fontSize: 48,
    color: 'rgba(255, 128, 0, 1)',
    lineHeight: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
      flex: 1,
      backgroundColor: 'orange',
      marginLeft: 10,
      marginRight: 10,
      marginTop: 50,
      borderRadius: 50,
      width: 200,
      alignSelf: 'center'
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  }
});
