import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverview from './screens/MealsOverview';
import DetailScreen from './screens/DetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerScreen() {
  return (
    <Drawer.Navigator 
      screenOptions={{
        sceneContainerStyle:  { backgroundColor: '#430483' },
        headerStyle: { backgroundColor: '#2c0356' },
        headerTintColor: 'white'
      }} 
    >
      <Drawer.Screen 
        name='MealsCategories' 
        component={CategoriesScreen} 
        options={{
          title: 'All Categories'
        }}
      />
      <Drawer.Screen name='FavoritesMeals' component={FavoritesScreen} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          contentStyle: { backgroundColor: '#430483' },
          headerStyle: { backgroundColor: '#2c0356' },
          headerTintColor: 'white'
        }}>
          <Stack.Screen 
            name='Drawers' 
            component={DrawerScreen}
            options={{ headerShown: false }} />
          <Stack.Screen name='MealsOverview' component={MealsOverview} />
          <Stack.Screen name='DetailScreen' component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
   </>
  );
}

const styles = StyleSheet.create({
  container: {}
});
