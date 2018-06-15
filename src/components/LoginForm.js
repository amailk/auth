import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  //deal with feedback from user-state
  state = { text: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
          label="Email"
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
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
