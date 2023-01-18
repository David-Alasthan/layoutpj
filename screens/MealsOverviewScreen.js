import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MealItem from '../components/MealItem';


import { MEALS } from '../data/dummy-data';

function MealsOverviewScreen({route}) {

  const displayedMeals = MEALS.filter((mealsItem) => {
    return mealsItem.categoryIds.indexOf(catId) >= 0;
  })

  const catId = route.params.categoryId

  function renderMealsItem() {
      return <MealItem title={itemData.item.title} />;
  }

  return (
    <View style={styles.container}> 
      <FlatList 
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealsItem}
      />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
})