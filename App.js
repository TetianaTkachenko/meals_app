import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverview from './screens/MealsOverview';
import DetailScreen from './screens/DetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoriteContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerScreen() {
  return (
    <Drawer.Navigator 
      screenOptions={{
        sceneContainerStyle:  { backgroundColor: '#3f2f25' },
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        drawerActiveBackgroundColor: '#e4baa1',
        drawerActiveTintColor: '#351401',
        drawerInactiveTintColor: 'white',
        drawerContentStyle: {backgroundColor: '#351401' }
      }} 
    >
      <Drawer.Screen 
        name='MealsCategories' 
        component={CategoriesScreen} 
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen name='FavoritesMeals' component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' size={size} color={color} />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator 
          screenOptions={{
            contentStyle: { backgroundColor: '#3f2f25' },
            headerStyle: { backgroundColor: '#351401' },
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
      </FavoriteContextProvider>
   </>
  );
}
