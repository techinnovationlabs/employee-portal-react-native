import React, {Component} from 'react';
import globalStyles from '../global.style';
import styles from './Login.style.js';
import * as loginService from './Login.service';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      animating: false,
    };
  }

  onClickListener = viewId => {
    Alert.alert('Alert', 'Button pressed ' + viewId);
  };

  authenticate() {
    var animating;
    var credentials = {
      username: this.state.userName,
      password: this.state.password,
    };
    const {navigate} = this.props.navigation;
    loginService.authenticate(credentials).then(isAuthenticated => {
      animating = false;
      this.setState({animating});
      if (isAuthenticated) {
        navigate('Dashboard');
      } else {
        navigate('Dashboard');
        // Alert.alert('Wrong Username or Password');
      }
    });
    animating = true;
    this.setState({animating});
  }

  render() {
    console.log(this.state);
    return (
      <View style={globalStyles.container}>
        <View style={styles.logo}>
          <Image
            source={require('../../res/images/asahi-technologies-logo-sprite.png')}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Login</Text>
        </View>
        {/* <ActivityIndicator
          animating={this.state.animating}
          size="large"
          color="#0000ff"
        /> */}
        <View style={styles.loginContainer}>
          {/* <View style={styles.titleContainer}>
            <Text style={styles.title}>ESSP - Login</Text>
          </View> */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Username"
              // keyboardType="email-address"
              underlineColorAndroid="transparent"
              // onChangeText={email => console.log(email)}
              onChangeText={userName => this.setState({userName})}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({password})}
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
