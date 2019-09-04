import React, { Component } from 'react';
import styles from './Login.style.js';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
} from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        };
    }

    onClickListener = viewId => {
        Alert.alert('Alert', 'Button pressed ' + viewId);
    };

    async authenticate() {
        var data = {
            username: this.state.userName,
            password: this.state.password,
        };
        try {
            let response = await fetch('http://192.168.2.25:8083/api/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            console.log(data);
            console.log(response);
            if (response.status >= 200 && response.status < 300) {
                Alert.alert('authenticated successfully!!!');
            } else {
                Alert.alert('Wrong Username and Password');
            }
        } catch (errors) {
            Alert.alert(errors);
        }
    }

    render() {
        console.log(this.state);
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image source={require('../../res/images/asahi-technologies-logo-sprite.png')} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>ESSP - Login</Text>
                </View>
                <View style={styles.loginContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputs}
                            placeholder="Username"
                            // keyboardType="email-address"
                            underlineColorAndroid="transparent"
                            // onChangeText={email => console.log(email)}
                            onChangeText={email => this.setState({ userName })}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputs}
                            placeholder="Password"
                            secureTextEntry={true}
                            underlineColorAndroid="transparent"
                            onChangeText={password => this.setState({ password })}
                        />
                    </View>

                    <TouchableHighlight
                        style={[styles.buttonContainer, styles.loginButton]}
                        onPress={() => this.authenticate()}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.buttonContainer}
                        onPress={() => this.onClickListener('restore_password')}>
                        <Text>Forgot your password?</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
