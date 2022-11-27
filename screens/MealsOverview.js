import { useLayoutEffect } from 'react';
import MealsList from '../components/mealsList/MealsList';
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

    return (
       <MealsList items={displayedMeals} />
    )
}

export default MealsOverview;
