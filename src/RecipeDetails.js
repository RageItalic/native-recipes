import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class RecipeDetails extends Component {
	static navigationOptions = {
		title: 'Recipe Details'
	}

	render() {
		const {recipe} = this.props.navigation.state.params;
		return(
			<View style={styles.container}>
				<Text style={styles.heading}>{recipe.recipeName} & {recipe.image}</Text>
				<Text>{"\n"}</Text>
				<Text style={styles.heading}>Ingredients:</Text>
				{recipe.ingredients.map((ingredient, index)=> <Text key={index} style={styles.content}>{ingredient}</Text>)}
				<Text>{"\n"}</Text>
				<Text style={styles.heading}>Instructions:</Text>
				<Text style={styles.content}>{recipe.instructions}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
	    flex: 0.75,
	    justifyContent: 'center',
	    alignItems: 'center',
	},
	heading: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	content: {
		textAlign: 'center'
	}
})

export default RecipeDetails;