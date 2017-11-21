import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';

import RecipeList from './src/RecipeList';
import RecipeDetails from './src/RecipeDetails';
import AddRecipe from './src/AddRecipe';

const App = StackNavigator({
  Home: {screen: RecipeList},
  RecipeDetails: {screen: RecipeDetails},
  AddRecipe: {screen: AddRecipe}
})

export default App;