import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryScreen from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

  const Stack = createNativeStackNavigator();

export default function App() {



  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor:  '#351401' },
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'},
          }}
        >
          <Stack.Screen 
            name='MealCategories' 
            component={CategoryScreen} 
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen 
            name='MealOverview' 
            component={MealsOverviewScreen} 
            // options={({ route, Navigaton }) => {
            //   const catId = route.params.categoryId;
            //   return{
            //     title: catId
            //   }
            // }} 
          />
          <Stack.Screen 
            name='MealDetails'
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
