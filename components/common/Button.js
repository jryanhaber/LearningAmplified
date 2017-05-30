import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ( {onPress, children} ) => {
		const { buttonStyle } = styles;

	return (
		<TouchableOpacity 
			onPress={ onPress } 
			style={styles.buttonStyle}>
			<Text style={styles.buttonText} >
             { children } 
			</Text>
		</TouchableOpacity>
		);
};



const styles = {
	buttonText: {
		alignSelf: 'center',
		color: '#007aff',
		fontWeight: '600',
		fontSize: 16, 
		paddingVertical: 10,
	},
	buttonStyle: {
		backgroundColor: '#fff',
		flex: 1,
		alignSelf: 'stretch', 
		borderRadius: 5, 
		marginHorizontal: 5, 
		borderColor: '#007aff',
		borderWidth: 1,
		padding: 10,


	},
	
}

export { Button };
