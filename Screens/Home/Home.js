import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {globalStyles} from '../../Styles/Global';

const Home = ({navigation}) => {
    const pressHandler = () => {
          navigation.navigate('ReviewDetails');
        //   navigation.push('ReviewDetails')
    }
        return (
            <View style={globalStyles.container}>
                <Text style={globalStyles.titleText}>Home Screen</Text>
                <Button title="Go to review" onPress={pressHandler}/>
            </View>
        );
  
    
};


export default Home;