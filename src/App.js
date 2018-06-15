import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyBnf-IUrjC2ukXarGXVplGTjTPkILv0WCw',
      authDomain: 'authentication-ama.firebaseapp.com',
      databaseURL: 'https://authentication-ama.firebaseio.com',
      projectId: 'authentication-ama',
      storageBucket: 'authentication-ama.appspot.com',
      messagingSenderId: '535421970141'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  }
}

export default App;
