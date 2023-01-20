import React from 'react'
import { StyleSheet, Text, View, Pressable, Image, Platform } from 'react-native';

import MealDetails from '../components/MealDetails';

import { MEALS } from '../data/dummy-data';


function MealDetailsScreen({ route }) {

    const mealId = route.params.mealId; 

    const selectMeal =  MEALS.find((meal) => meal.id === mealId )
    
  return (
    <View>
        <Image source={{ uri: selectMeal.imageUrl}} style={styles.image} />
        <Text style={styles.title}>{selectMeal.title}</Text>
        <MealDetails 
          duration={selectMeal.duration} 
          complexity={selectMeal.complexity} 
          affordability={selectMeal.affordability} 
          textStyle={styles.detailsText}
        />
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Ingredients</Text>
        </View>
        {selectMeal.ingredients.map((ingredient) => (
            <Text key={ingredient}>{ingredient}</Text>
        ))}
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Steps</Text>
        </View>
        {selectMeal.steps.map((step) => (
            <Text key={step}>{step}</Text>
        ))}
    </View>
  )
}

export default MealDetailsScreen


const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailsText: {
    color: 'white'
  },
  subTitleContainer: {
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 4,
    marginHorizontal: 24,
    marginVertical: 2
  },
  subTitle: {
    fontSize: 18,
    color: '#e2b497',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})