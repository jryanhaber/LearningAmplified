import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
	
	// set the initial state for any component which needs to grab data from an api
	// because it will try to render before the data is in
	// API CALL --> response => SET STATE +> Triggers reload of app rendering
	state = { albums: [] };

	componentWillMount(){
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({  albums: response.data }));

	}

	renderAlbums(){
		return this.state.albums.map( album => <AlbumDetail
			key = {album.title} album={album} />);
	}

	render() {
		console.log(this.state);
		return (
				<ScrollView>
				{this.renderAlbums()}
				</ScrollView>
				);
		}			
	}

	 


export { AlbumList };
