import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  //deal with feedback from user-state
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;
    //spinner renders cz loading true
    this.setState({ error: '', loading: true });
    //sign my user in with an email and password
    //returns a promise that handles some amount of asyncrhonous code.
    //make use of the promise - get notified when request is complete.
    firebase.auth().signInWithEmailAndPassword(email, password)
      //if request fails, then we enter this function
      //to the catch statement. inside here we start going down the
      //error chain(in notes)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(() => {
        //show error message on screen.
          this.setState({ error: 'Authentication Failed.' });
        });
      });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
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
          {/*by default there is no error. if fails. this will be populated
            and there will be an error message.*/}
          {this.state.error}
        </Text>

        <CardSection>
          //either show button or show the spinner,rerender component(state)
          //^moved inside renderbutton, call renderbutton method.
          {this.renderButton()}
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
