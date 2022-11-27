import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import MealDetails from '../MealDetails';

function MealItem({ id, title, imageUrl, duration, affordability, complexity }) {
    const navigation = useNavigation()

    function selectMealItemHandler() {
        navigation.navigate('DetailScreen',{
        mealId: id
        })
    }
    return (
        <View style={styles.mealItem}>
            <View style={styles.innerContainer}>
                <Pressable
                    onPress={selectMealItemHandler} 
                    android_ripple={{color: '#ccc'}}
                    style={({ pressed }) => (
                        pressed ? styles.buttonPressed : null
                        )
                    }
                >
                    <View>
                        <Image style={styles.image} source={{uri: imageUrl}} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails 
                        duration={duration} 
                        affordability={affordability} 
                        complexity={complexity} 
                    />
                </Pressable>
            </View>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8
    },
    buttonPressed: {
        opacity: 0.25
    }
})