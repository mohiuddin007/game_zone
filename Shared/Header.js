import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function Header({navigation}){
    const openMenu = () => {
        navigation.openDrawer();
    }
    return(
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon}/>
            <View style={styles.headerTitle}>
                <Image source={require('../assets/rating-1.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>
                      GameZone
                </Text>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 10
    },
    headerImage:{
        width: 26,
        height: 26,
        marginHorizontal: 10
    },
    headerTitle:{
        flexDirection: 'row',
    }
})