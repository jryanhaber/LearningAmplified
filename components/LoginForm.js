import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: false });
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
            this.setState({
              error: 'We were unable to log you in. Please try again.',
            });
          });
      });
  }

  renderButton() {
    if (this.state.loading) {
      return <Text>Loading...</Text>; // return <Spinner size="small" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>;
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
        <CardSection>
          <Input
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
        </CardSection>
        <CardSection>
          <Text style={styles.errorTextStyle}>
            {/* show an error if the reg fails */}
            {this.state.error}
          </Text>
        </CardSection>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
};

export default LoginForm;
