import {createStackNavigator} from 'react-navigation-stack';
import Home from '../Screens/Home/Home';
import ReviewDetails from '../Screens/ReviewDetails/ReviewDetails';
import React from 'react';
import Header from '../Shared/Header';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => {
            return{
                headerTitle: () => <Header navigation={navigation}/>,
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
        }
    }
}

const HomeStack = createStackNavigator(screens,{
        defaultNavigationOptions: {
            headerTintColor: '#444',
            headerStyle: {backgroundColor: '#f0ddce', height: 70}
        }    
});

export default HomeStack;