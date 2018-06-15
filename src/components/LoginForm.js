import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  //deal with feedback from user-state
  state = { email: '', password: '', error: '' };

  onButtonPress() {
    const { email, password } = this.state;
    //sign my user in with an email and password
    //returns a promise that handles some amount of asyncrhonous code.
    //make use of the promise - get notified when request is complete.
    firebase.auth().signInWithEmailAndPassword(email, password)
      //if request fails, then we enter this function
      //to the catch statement. inside here we start going down the
      //error chain(in notes)
      .catch(()=>{
        firease.auth().createUserWithEmailAndPassword(email,password)
        .catch(() => {
        //show error message on screen.
          this.setState({ error: 'Authentication Failed.' });
        });
      });
  }

  render() {
    return (
      <Card>
        //email
        <CardSection>
          <Input
          placeholder="user@gmail.com"
          label="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        //password
        <CardSection>
          <Input
          //just listing secure.. means its true!
          secureTextEntry
          placeholder="password"
          label="Password"
          value={this.state.password}
          //gets called and updates the password
          onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          //by default there is no error. if fails. this will be populated
          //and there will be an error message.
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize:20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
