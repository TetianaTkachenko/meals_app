import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

function IconButton({name, color, onPress}) {
    return (
        <Pressable 
            style={({ pressed }) => pressed && styles.buttonPressed}
            onPress={onPress}>
            <Ionicons name={name} size={24} color={color} />
        </Pressable>
    )
}

export default IconButton;

const styles = StyleSheet.create({
    buttonPressed: {
        opacity: 0.7
    }
})