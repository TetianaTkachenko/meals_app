import {View, Text, StyleSheet } from 'react-native'
function Subtitle({ children }) {
    return (

            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>{children}</Text>
            </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitleContainer: {
        marginHorizontal: 12,
        borderBottomWidth: 2,
        borderBottomColor: '#e0c4fc'
    },
    subtitle: {
        textAlign: 'center',
        padding: 4,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e0c4fc'
    }
})