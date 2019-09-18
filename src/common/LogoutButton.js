import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {View, TouchableHighlight} from 'react-native';
import {withNavigation} from 'react-navigation';

class LogoutButton extends Component {
  state = {};
  render() {
    const {navigation} = this.props;
    return (
      <TouchableHighlight onPress={() => navigation.goBack()}>
        <Icon name="log-out" type="entypo" size={30} color="#272b29" />
      </TouchableHighlight>
    );
  }
}

export default withNavigation(LogoutButton);
