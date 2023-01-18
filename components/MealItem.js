import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';


function MealItem({title}) {
  return (
    <View>
       <Text>{title}</Text>
    </View>
  )
}

export default MealItem
