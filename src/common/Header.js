import React, {Component} from 'react';
import {View, Image} from 'react-native';

class Header extends Component {
  state = {};
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: '#82b2df',
        }}>
        <Image
          source={require('../res/images/asahi-technologies-logo-sprite.png')}
        />
      </View>
    );
  }
}

export default Header;
