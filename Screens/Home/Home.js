import React, { useState } from 'react';
import { Button, FlatList, Keyboard, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
import Card from '../../Shared/Card';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../../Styles/Global';
import ReviewForm from '../ReviewForm/ReviewForm';

const Home = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'dskfdhb sdjli sd dsf', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'dskfdksdjhfkshb sdjli sd dsf', rating: 3, body: 'lorem ipsum', key: '2' },
        { title: 'dskfdhb sdjlisdf sd dsf', rating: 2, body: 'lorem ipsum', key: '3' },
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString;
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        });
        setModalOpen(false);
    }
    const pressHandler = () => {

        navigation.navigate('ReviewDetails');
        //   navigation.push('ReviewDetails')
    }
    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name="close"
                        size="24"
                        style={{ ...styles.modalToggle, ...styles.modalClose }}
                        onPress={() => setModalOpen(false)}
                    />
                    <ReviewForm addReview={addReview} />
                </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons
                name="add"
                size="24"
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
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

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex: 1,

    }
})
export default Home;