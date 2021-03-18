import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.Card}>
            <View style={styles.cardContent}>
               {props.children}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    Card: {
      borderRadius: 6,
      elevation: 3, 
      backgroundColor: '#fff',
      shadowOffset: {width: 1, height:1},
      shadowColor: '#333',
      shadowOpacity: 0.3,
      marginVertical: 6,
      marginHorizontal: 6
    },
    cardContent: {
       marginHorizontal: 18, 
       marginVertical: 10
    }
})
export default Card;