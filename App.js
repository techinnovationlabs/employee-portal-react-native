/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/screens/login/Login';
import Profile from './src/screens/profile/Profile';
import {Button} from 'react-native';
import Header from './src/common/Header';
import { Icon } from 'react-native-elements';

// export default class App extends Component {
//   render() {
//     return (
//       <Login/>
//     );
//   }
// }

const hideNavBar = {
  header: null,
};

const logoNavBar = {
  // headerTitle: (
  //   <Image
  //     source={require('./src/res/images/asahi-technologies-logo-sprite.png')}
  //   />
  // ),
  headerTitle: <Header/>,
  headerLeft: null,  
};
const MainNavigator = createStackNavigator({
  Home: {screen: Login, navigationOptions: logoNavBar},
  Profile: {screen: Profile, navigationOptions: logoNavBar},
});

const App = createAppContainer(MainNavigator);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

export default App;
