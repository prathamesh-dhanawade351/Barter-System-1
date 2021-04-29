import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import ExchangeScreen from '../screens/ExchangeScreen';
import SignupLoginScreen from '../screens/SignupLoginScreen';
import SettingScreen from '../screens/SettingScreen';
import NotificationScreen from '../screens/NotificationScreen';


export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
  Exchange : {
    screen : ExchangeScreen
  },
  Notification : {
    screen : NotificationScreen
  },
  SignupLogin : {
    screen : SignupLoginScreen
  },
  Setting : {
    screen : SettingScreen
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
