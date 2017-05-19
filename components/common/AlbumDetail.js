import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import CardSection from './CardSection';
import Card from './Card';
import Button from './Button';

const AlbumDetail = (props) => {

	const { title, artist, image, thumbnail_image, url } = props.album;
	return (
			
			<Card>
				<CardSection>
		              
						<View>
						<Image 
							style={styles.thumbnail_image}
							source={{uri: thumbnail_image}}/>
						</View>
		              <View 
		              		style={styles.headerContentStyle}>
		             	 <Text>{title}  </Text>
		             	 <Text>{artist}  </Text>
		              </View>
				</CardSection>
				<CardSection>
					<Image  
							source={{uri: image}}
							style= {styles.bodyImage}/>	
				</CardSection>	
				<CardSection>
					<Button 
							onPress={() => Linking.openURL(url ) } 
							 >Buy Me Now!</Button>
				</CardSection>		
			</Card>

		);
};


const styles = {
	headerContentStyle:{
		flexDirection: 'column',
		// evenly space items in a column
		justifyContent: 'space-around'
	},
	thumbnail_image:{
		// set image size always
		height: 50,
		width: 50,
		padding: 10,
		marginHorizontal: 10,
	},
	bodyImage:{
		height: 300, 
		flex: 1,
		width: null,
	},
	button: {
		heigh: 50,
	}
};

export default AlbumDetail;
