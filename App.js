/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FlatListDemo from "./components/FlatListDemo";
import firebase from "firebase";
const startApp=()=>{
  console.log("startahsjk")
//   var config = {
//     apiKey: "AIzaSyARq0ZZw3vv6OovoNBw7cfxg6MvHkl4Gfc",
//     authDomain: "testproject-4796c.firebaseapp.com",
//     databaseURL: "https://testproject-4796c.firebaseio.com",
//     projectId: "testproject-4796c",
//     storageBucket: "",
//     messagingSenderId: "168797910433"
//   };
//   if (!firebase.apps.length) {
//     firebase.initializeApp(config);
// }

}
export default class App extends Component{

  constructor(props) {
    super(props)
   startApp()
  }
  render(){
    return <FlatListDemo/>
  }

}


// var config = {
//   apiKey: "AIzaSyBHFDH9se-j9fSi8YAQ0SJgZhB93CbNChg",
//   // authDomain: "<PROJECT_ID>.firebaseapp.com",
//   databaseURL: "https://authtest-daa6a.firebaseio.com/",
//   // storageBucket: "<BUCKET>.appspot.com",
// };
// type Props = {};
// export default class App extends Component<Props> {
  
//   componentDidMount() {
    
//     firebase.initializeApp(config);
//   }
  
//   render() {
//     return (
     
//         <FlatListDemo/>
      
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
