import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {View, TouchableHighlight} from 'react-native';
import {withNavigation} from 'react-navigation';

class NavigationButton extends Component {
  state = {};
  render() {
    const {navigation} = this.props;
    return (
      <TouchableHighlight onPress={() => navigation.goBack()}>
        {/* <Icon name="entypo-left-open" color="#272b29" /> */}
        <Icon name="chevron-left" type="entypo" size={30} color="#272b29" />
      </TouchableHighlight>
    );
  }
}

export default withNavigation(NavigationButton);
