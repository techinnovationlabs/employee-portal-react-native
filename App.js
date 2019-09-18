import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/screens/login/Login';
import Dashboard from './src/screens/dashboard/Dashboard';
import Header from './src/common/Header';
import NavigationButton from './src/common/NavigationButton';
import LogoutButton from './src/common/LogoutButton';


const hideNavBar = {
  header: null,
};

const logoNavBar = {
  headerTitle: <Header/>, 
  headerLeft: <NavigationButton/>,
  headerStyle: {
    backgroundColor: '#82b2df',
    height: 66
  },
  headerRight:<LogoutButton/>
};
const MainNavigator = createStackNavigator({
  Home: {screen: Login, navigationOptions: hideNavBar},
  Dashboard: {screen: Dashboard, navigationOptions: logoNavBar},
});

const App = createAppContainer(MainNavigator);

export default App;
