import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
})

const FavoriteContextProvider = ({ children }) => {
    const [favoriteMealsIds, setFavoriteMealsIds] = useState([])

    function addFavorite(id) {
        setFavoriteMealsIds((currentMealIds) => [...currentMealIds, id])
    }
    function removeFavorite(id) {
        setFavoriteMealsIds((currentMealIds) =>
            currentMealIds.filter((mealId) => mealId !== id))
    }
    value = {
        ids: favoriteMealsIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoriteContextProvider;