import { useLayoutEffect } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import List from '../components/details/List';
import Subtitle from '../components/details/SubTitle';
import IconButton from '../components/IconButton';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

function DetailScreen({ route, navigation }) {
    const dispatch = useDispatch()
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    const mealIsFavorite = favoriteMealIds.includes(mealId)

    function changeFavoritestatusHandler() {
        if(mealIsFavorite) {
            dispatch(removeFavorite({ id: mealId }))
        } else {
            dispatch(addFavorite({ id: mealId }))
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                    color='white' 
                    name={ mealIsFavorite ? 'star' : 'star-outline' }
                    onPress={changeFavoritestatusHandler} 
                />
            }
        })
    }, [changeFavoritestatusHandler, mealId ])

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
            <Text style={styles.title}>
                {selectedMeal.title}
            </Text>
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