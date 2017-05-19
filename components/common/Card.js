import React from 'react';
import { View } from 'react-native';


const Card = (props) => {
	return (
		<View style={styles.containerStyle}>
		{props.children}
		</View>
		);
};



const styles={
	containerStyle:{
		borderWidth : 1, 
		borderRadius: 2, 
		borderColor: '#ddd', 
		borderBottomWidth: 0, 
		shadowColor: '#000', 
		margin: 5,
		elevation: 2,
		
	}
}

export { Card };
