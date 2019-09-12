import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import globalStyles from '../global.style';
import GLOBAL from '../../config/global';
import {CardViewWithIcon} from 'react-native-simple-card-view';

class Profile extends Component {
  state = {};
  render() {
    const miniCardStyle = {
      shadowColor: '#000000',
      shadowOffsetWidth: 2,
      shadowOffsetHeight: 2,
      shadowOpacity: 0.1,
      hadowRadius: 5,
      bgColor: '#ffffff',
      padding: 5,
      margin: 5,
      borderRadius: 3,
      elevation: 3,
      width: Dimensions.get('window').width / 2 - 10,
    };
    console.log(GLOBAL.currentlogin);
    return (
      <View style={globalStyles.container}>
        <CardViewWithIcon
          withBackground={false}
          androidIcon={'logo-youtube'}
          iosIcon={'logo-youtube'}
          iconHeight={30}
          iconColor={'#ff0000'}
          title={'YOUTUBE'}
          contentFontSize={10}
          titleFontSize={12}
          style={miniCardStyle}
        />
            <CardViewWithIcon
          withBackground={false}
          androidIcon={'logo-youtube'}
          iosIcon={'logo-youtube'}
          iconHeight={30}
          iconColor={'#ff0000'}
          title={'YOUTUBE'}
          contentFontSize={10}
          titleFontSize={12}
          style={miniCardStyle}
        />
      </View>
    );
  }
}

export default Profile;
