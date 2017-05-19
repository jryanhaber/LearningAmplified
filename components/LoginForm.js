import React ,{ Component } from 'react';
import { View } from 'react-native';
import { Button, Card, CardSection, Input } from './common'

class LoginForm extends Component {
state = { text: ''};

	render(){
		return (
			<Card>
				<CardSection> 
					<Input
						value={ this.state.text }
						onChangeText = {text => this.setState({ text })}
						label="Email"
						/>
				</CardSection> 
				<CardSection/> 
				<CardSection>
					<Button> Login
					</Button> 
				</CardSection>
			</Card>

		);	
	}
	
};

export default LoginForm;

