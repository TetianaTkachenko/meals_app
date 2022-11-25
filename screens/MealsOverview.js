import { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList} from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';

function MealsOverview({ route, navigation }) {
    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId).title
        navigation.setOptions({
            title: categoryTitle,
        })
    }, [navigation, catId] )

    function renderMealItem( itemData ) {
        const item = itemData.item
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            affordability: item.affordability,
            complexity: item.complexity
        }    
        return <MealItem {...mealItemProps} />
    } 

    return (
        <View style={styles.container} >
            <FlatList 
                data={displayedMeals} 
                keyExtractor={item => item.id}
                renderItem={renderMealItem}
             />
        </View>
    )
}

export default MealsOverview;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})