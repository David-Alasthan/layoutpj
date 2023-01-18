import React from 'react'
import { CATEGORIES } from '../data/dummy-data';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CategoryGridTitle from '../components/CategoryGridTitle';


function CategoryScreen({navigation}) {
  function renderCategoryItem(itemData) {
  
    function pressHandler() {
      navigation.navigate("MealOverview", {
        categoryId: itemData.item.id,
      });
    }
      return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />;
  }
  return (
    <FlatList 
        data={CATEGORIES} 
        keyExtractor={(item) => item.id} 
        renderItem={renderCategoryItem} 
        numColumns={2}
    />
  )
}

export default CategoryScreen
