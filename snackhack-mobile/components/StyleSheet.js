import { StyleSheet, Platform } from 'react-native'

const container = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingLeft: 20,
      paddingRight: 20
    }})

const title = StyleSheet.create({
    title:{
        padding: 30,
        fontSize: 48,
        color: 'rgba(255, 128, 0, 1)',
        lineHeight: 24,
        fontWeight: 'bold',
        textAlign: 'center'
      }})

const text = StyleSheet.create({    
    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 24,
        fontWeight: '800',
        paddingTop: 10,
        paddingBottom: 10,
    }})

const button = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        backgroundColor: 'orange',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 50,
        borderRadius: 50,
        width: 200,
        alignSelf: 'center'
    }})

const welcome = StyleSheet.create({
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
}})

// const tabs = StyleSheet.create({
//     tabBarInfoContainer: {
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         ...Platform.select({
//         ios: {
//             shadowColor: 'black',
//             shadowOffset: { height: -3 },
//             shadowOpacity: 0.1,
//             shadowRadius: 3,
//         },
//         android: {
//             elevation: 20,
//         },
//         }),
//         alignItems: 'center',
//         backgroundColor: '#fbfbfb',
//         paddingVertical: 20,
// }})

// const tabtext = StyleSheet.create({
//     tabBarInfoText: {
//         fontSize: 17,
//         color: 'rgba(96,100,109, 1)',
//         textAlign: 'center',
// }})
// const highlighttext = StyleSheet.create({
//     codeHighlightText: {
//         color: 'rgba(96,100,109, 0.8)'
//   }})

// const highlightcontainer = StyleSheet.create({
//     codeHighlightContainer: {
//         backgroundColor: 'rgba(0,0,0,0.05)',
//         borderRadius: 3,
//         paddingHorizontal: 4,
//   }})
// const margin = StyleSheet.create({
//     navigationFilename: {
//         marginTop: 5
//   }})



export {container, title, text, button, welcome}
