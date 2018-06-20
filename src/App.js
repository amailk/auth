import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyBnf-IUrjC2ukXarGXVplGTjTPkILv0WCw',
      authDomain: 'authentication-ama.firebaseapp.com',
      databaseURL: 'https://authentication-ama.firebaseio.com',
      projectId: 'authentication-ama',
      storageBucket: 'authentication-ama.appspot.com',
      messagingSenderId: '535421970141'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  //show loginform or log out button.
  renderContent() {

    switch (this.state.loggedIn) {
      case true:
        return (

        <Button onPress={() => firebase.auth().signOut()}>
          Log out
        </Button>
      );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }


  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
