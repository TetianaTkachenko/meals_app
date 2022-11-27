import { useContext, useLayoutEffect } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import List from '../components/details/List';
import Subtitle from '../components/details/SubTitle';
import IconButton from '../components/IconButton';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';

function DetailScreen({ route, navigation }) {
    const favoriteMealsContext = useContext(FavoritesContext)
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    const mealIsFavorite = favoriteMealsContext.ids.includes(mealId)

    function changeFavotitestatusHandler() {
        if(mealIsFavorite) {
            favoriteMealsContext.removeFavorite(mealId)
        } else {
            favoriteMealsContext.addFavorite(mealId)
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                    color='white' 
                    name={ mealIsFavorite ? 'star' : 'star-outline' }
                    onPress={changeFavotitestatusHandler} 
                />
            }
        })
    }, [changeFavotitestatusHandler, mealId ])

    useLayoutEffect(() => {
        const mealTitle = MEALS.find(
            (meal) => meal.id === mealId).title
        navigation.setOptions({
            title: mealTitle
        })
    }, [navigation, mealId])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails 
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                duration={selectedMeal.duration}
                textStyle={styles.detailtext}
            />
            <View style={styles.outerContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        marginTop: 8
    },
    styleDetail: {
        color: 'white'
    },
    listContainer: {
        width: '90%'
    },
    outerContainer: {
        alignItems: 'center'
    },
    detailtext: {
        color: 'white'
    },
    rootContainer: {
        marginBottom: 32
    }
})