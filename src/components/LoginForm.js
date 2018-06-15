import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  //deal with feedback from user-state
  state = { email: '', password: '' };

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

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
