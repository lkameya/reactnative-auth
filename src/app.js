import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDgr-3KJQATNDgD32uxJQSuXg23lu74NWE',
            authDomain: 'auth-710bd.firebaseapp.com',
            databaseURL: 'https://auth-710bd.firebaseio.com',
            projectId: 'auth-710bd',
            storageBucket: 'auth-710bd.appspot.com',
            messagingSenderId: '647565957273'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
