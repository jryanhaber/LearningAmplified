import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '' });
    // try to sign in the user
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      // if it fails catch and...
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => {
            // if it fails to create a new account
            this.setState({ error: 'Authentication Failed' });
          });
      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            label="Email"
            placeholder="user@gmail.com"
          />
        </CardSection>
        <Input
          placeholder="password"
          label="Password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          secureTextEntry
        />

        <CardSection />
        <Text style={styles.errorTextStyle}>
          {/* show an error if the reg fails */}
          {this.state.error}
        </Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            {' '}Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 24,
    textAlign: 'center',
  },
};

export default LoginForm;
