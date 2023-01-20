import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  Pressable, 
  Image, 
  Platform 
} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import MealDetails from './MealDetails';


function MealItem({ id ,title, imageUrl, affordability, complexity, duration }) {

  const navigation = useNavigation();
  
  function selecteMealItemHandler() {
    
    navigation.navigate('MealDetails', {
      mealId: id
    })

  }


  return (
    <View style={styles.mealItem}>
      <Pressable 
        android_ripple={{color: '#ccc'}} 
        style={({pressed}) => [
                    pressed ? styles.buttonPressed : null,
                ]}
        onPress={selecteMealItemHandler}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails 
          duration={duration} 
          affordability={affordability} 
          complexity={complexity} 
        />
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    shadowColor: 'white',
    shadowOpacity: 0.35,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 16,
  },
  buttonPressed: {
    opacity: 0.5,
},
  image: {
    width: '100%',
    height: 200,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    padding: 8,
  },

})
