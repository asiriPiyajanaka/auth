import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import {Header} from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCT--WABKYqaGdJ4yAc6cXyS_uWF2TihYA",
      authDomain: "auth-6564e.firebaseapp.com",
      databaseURL: "https://auth-6564e.firebaseio.com",
      projectId: "auth-6564e",
      storageBucket: "auth-6564e.appspot.com",
      messagingSenderId: "1010937336635"
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm/>
      </View>
    );
  }
}

export default App;