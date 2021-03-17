import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../Styles/Global';

const ReviewDetails = ({navigation}) => {
    const pressHandler = () =>{
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
            <Text>ReviewDetails</Text>
            <Button title="Back to Home" onPress={pressHandler}/>
        </View>
    );
};
 
export default ReviewDetails;