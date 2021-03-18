import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../../Shared/Card';
import {globalStyles} from '../../Styles/Global';

const Home = ({navigation}) => {
    const [reviews, setReviews] = useState([
        {title: 'dskfdhb sdjli sd dsf', rating: 5, body: 'lorem ipsum', key: '1'},
        {title: 'dskfdksdjhfkshb sdjli sd dsf', rating: 3, body: 'lorem ipsum', key: '2'},
        {title: 'dskfdhb sdjlisdf sd dsf', rating: 2, body: 'lorem ipsum', key: '3'},
    ])
    const pressHandler = () => {
          navigation.navigate('ReviewDetails');
        //   navigation.push('ReviewDetails')
    }
        return (
            <View style={globalStyles.container}>
                <FlatList
                data={reviews}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
                />
            </View>
        );
  
    
};


export default Home;