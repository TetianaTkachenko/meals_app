import { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import MealsList from '../components/mealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';

function FavoritesScreen() {
    const mealsFavoriteContext = useContext(FavoritesContext)
    const favoriteMeals = MEALS.filter((meal) => 
        mealsFavoriteContext.ids.includes(meal.id))

    if(!favoriteMeals.length) {
        return (
            <View style={styles.rootContainer} >
                <Text style={styles.text}>You haven't favorite meals yet!</Text>
            </View>
        )
    }
    return (
        <MealsList items={favoriteMeals} />
    )
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e4baa1'
    }
})