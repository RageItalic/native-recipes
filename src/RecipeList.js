import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Button, AsyncStorage} from 'react-native';

import recipes from '../data/recipes.json';

const ListItem = ({recipe, handleClick}) => 
	<TouchableHighlight onPress={()=> handleClick(recipe)}>
		<Text style={styles.heading}>{recipe.recipeName}</Text>
	</TouchableHighlight>

class RecipeList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			recipes
		}
	}


	static navigationOptions = {
		title: 'Recipe List'
	}

	_clickItem = (recipe) => {
		this.props.navigation.navigate('RecipeDetails', { recipe })
	}

	_addRecipe = (recipe) => {
		this.setState({
			recipes: [...this.state.recipes, recipe]
		}, this._saveRecipes)
	}

	_saveRecipes = () => {
		AsyncStorage.setItem('recipebook', JSON.stringify(this.state.recipes))
	}

	render() {
		const recipes = this.state.recipes;
		return (
			<View style={styles.container}>
				{recipes.length ? 
					recipes.map(recipe => 
						<ListItem 
							key={recipe.id} 
							recipe={recipe}
							handleClick={this._clickItem}
						/>
					) :
					<Text style={styles.centered}>No Recipes!!</Text>
				}
				<Button title="Add Recipe" onPress={event => this.props.navigation.navigate('AddRecipe', {saveRecipe: this._addRecipe})} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
	    // height: '100%',
	    // width: '100%',
	    // flexDirection: 'column',
	    // paddingTop: 100,
	    flex: 0.75,
	    justifyContent: 'center',
	    alignItems: 'center'
	},
	centered: {
	    alignSelf: 'center',
	    width: '100%',
	    textAlign: 'center'
	},
	heading: {
		fontWeight: 'bold',
		fontSize: 20,
	}
})

export default RecipeList;