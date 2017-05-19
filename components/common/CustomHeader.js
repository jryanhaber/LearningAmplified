import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// make a component

const CustomHeader = (props) => {

	return (
		<View style={styles.header}>
			<Text style={styles.headerText}>{props.headerText}</Text>
		</View>
  );
};




const styles = StyleSheet.create({

  header: {
    backgroundColor: 'lightgrey',
    paddingTop: 15,
    height: 60,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    elevation: 1,
    position: 'relative'
  },
  headerText:{
 	fontSize: 24,
  	justifyContent: 'center',
    alignSelf:'center',
  }

});



export { CustomHeader };
