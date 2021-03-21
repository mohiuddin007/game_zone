import { Formik } from 'formik';
import React from 'react';
import { Button, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { globalStyles } from '../../Styles/Global';

const ReviewForm = () => {
    return (
        <View style={globalStyles.container}>
            <Formik
            initialValue={{title: '', body: '', rating: ''}}
            onSubmit={(values, actions) => {
                actions.resetForm();
               addReview(values); 
            }}
            >
              {(props) => (
                  <View>
                      <TextInput
                      style={globalStyles.input}
                      placeholder='Review title'
                      onChangeText={props.handleChange('title')}
                      value={props.values.title}
                      />

                     <TextInput
                     multiline
                      style={globalStyles.input}
                      placeholder='Review body'
                      onChangeText={props.handleChange('body')}
                      value={props.values.body}
                      />

                    <TextInput
                     multiline
                      style={globalStyles.input}
                      placeholder='Rating (1-5)'
                      onChangeText={props.handleChange('rating')}
                      value={props.values.rating}
                      keyboardType="numeric"
                      />

                      <Button title='Submit' color='maroon' onPress={props.handleSubmit}/>
                  </View>
              )}
            </Formik>
        </View>
    );
};

export default ReviewForm;