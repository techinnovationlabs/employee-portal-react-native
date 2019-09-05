/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import Login from './src/screens/login/Login';
import Profile from './src/screens/profile/Profile';

// export default class App extends Component {
//   render() {
//     return (
//       <Login/>
//     );
//   }
// }

const hideNavBar =  {
  header: null,
}

const MainNavigator = createStackNavigator({
  Home: {screen: Login, navigationOptions: hideNavBar},
  Profile: {screen: Profile},
});

const App = createAppContainer(MainNavigator);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

export default App;
