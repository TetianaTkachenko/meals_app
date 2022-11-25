import {View, Text, StyleSheet } from 'react-native'
function List({ data }) {
   return data.map(dataPoint => {
        return <View style={styles.listItem} key={dataPoint}> 
                <Text style={styles.itemText}>{dataPoint}</Text>
            </View>
    })
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        backgroundColor: '#e0c4fc',
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginHorizontal: 12,
        marginVertical: 4
    },
    itemText: {
        textAlign: 'center',
        color: '#2c0356',
        fontSize: 16
    }
})