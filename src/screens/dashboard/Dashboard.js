import React, { Component } from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../global.style';

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <View style={globalStyles.container}>
        <Text>Dashboard content will be displayed here</Text>
      </View>
    );
  }
}

export default Dashboard;
