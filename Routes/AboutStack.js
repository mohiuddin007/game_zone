import {createStackNavigator} from 'react-navigation-stack';
import About from '../Screens/About/About';
import React from 'react';
import Header from '../Shared/Header';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({navigation}) => {
            return{
                headerTitle: () => <Header navigation={navigation}/>,
            }
        }
    }
}

const AboutStack = createStackNavigator(screens,{
        defaultNavigationOptions: {
            headerTintColor: '#444',
            headerStyle: {backgroundColor: '#f0ddce', height: 70}
        }    
});

export default AboutStack;