import React from 'react';
import {Image, View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';

import images from '../../src/assets/images/images';
import {hScale, vScale, width, height} from '../commons/PerfectPixel';

import BabyScreen from '../screens/main/BabyScreen';
import InjectBookScreen from '../screens/main/InjectBookScreen';
import OtherScreen from '../screens/main/OtherScreen';
import StatisticalScreen from '../screens/main/StatisticalScreen';
import VacxinScreen from '../screens/main/VacxinScreen';
import InfoBabyScreen from '../screens/detail/InfoBabyScreen';
import ChangeInfoBabyScreen from '../screens/detail/ChangeInfoBabyScreen';
import ChangeInjectScreen from '../screens/detail/ChangeInjectScreen';

import colors  from '../assets/colors/colors';

import InjectDetailScreen from '../screens/detail/InjectDetailScreen';
import SettingLotifyScreen from '../screens/detail/SettingLotifyScreen';

// const StatisticalTabPager = createMaterialTopTabNavigator ({
//   StatisticalScreen:{
//     screen: StatisticalScreen,
//     navigationOptions: {
//       headerShown: false,
//     },
//   },
//   VacxinScreen: {
//     screen: VacxinScreen,
//     navigationOptions: {
//       headerShown: false,
//     },
//   },
//  },
//  {
   
//  });

const Other = createStackNavigator ({
  OtherScreen:{
    screen: OtherScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  SettingLotifyScreen:{
    screen: SettingLotifyScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
},
{
  initialRouteName: 'OtherScreen',
  initialRouteParams: {transition: 'fade'},
  navigationOptions: ({ navigation }) => ({
    tabBarVisible: navigation.state.index < 1,
  })
 
});

const Statistical = createStackNavigator ({
  StatisticalScreen:{
    screen: StatisticalScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  ChangeInjectScreen:{
    screen: ChangeInjectScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
 
});

const Inject = createStackNavigator ({
  VacxinScreen: {
    screen: VacxinScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  InjectDetailScreen: {
    screen: InjectDetailScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
},
{
  initialRouteName: 'VacxinScreen',
  initialRouteParams: {transition: 'fade'},
  navigationOptions: ({ navigation }) => ({
    tabBarVisible: navigation.state.index < 1,
  })
  // mode: 'modal',
});

const Baby = createStackNavigator ({
  BabyScreen: {
    screen: BabyScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  InfoBabyScreen: {
    screen: InfoBabyScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  ChangeInfoBabyScreen: {
    screen: ChangeInfoBabyScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
},
{
  initialRouteName: 'BabyScreen',
  initialRouteParams: {transition: 'fade'},
  navigationOptions: ({ navigation }) => ({
    tabBarVisible: navigation.state.index < 1,
  })
  // mode: 'modal',
});

const Router = createBottomTabNavigator({
  VacxinScreen: {
    screen: Inject,
    navigationOptions: {
      headerShown: false,
      title:'Vắc xin',
      tabBarIcon: ({ focused, color, size }) => (
        focused ? <Image source={images.isTabInject}
        style={[{ width: vScale(48), height: vScale(51) }]}
        ></Image>
        : <Image source={images.tabInject}
            style={[{ width: vScale(48), height: vScale(51) }]}
        ></Image>
      ),
    },
  },
  StatisticalScreen: {
    screen: Statistical,
    navigationOptions: {
      headerShown: false,
      title:'Thống kê',
      tabBarIcon: ({ focused, color, size }) => (
        focused ? <Image source={images.isTabTest}
        style={[{ width: vScale(41), height: vScale(53) }]}
        ></Image>
        : <Image source={images.tabTest}
            style={[{ width: vScale(41), height: vScale(53) }]}
        ></Image>
      ),
    },
  },
  BabyScreen: {
    screen: Baby,
    navigationOptions: {
      headerShown: false,
      title:'Bé yêu',
      tabBarIcon: ({ focused, color, size }) => (
        focused ? <Image source={images.isTabAva}
        style={[{ width: vScale(45), height: vScale(54) }]}
        ></Image>
        : <Image source={images.tabAva}
            style={[{ width: vScale(45), height: vScale(54) }]}
        ></Image>
      ),
    },
  },
  InjectBookScreen: {
    screen: InjectBookScreen,
    navigationOptions: {
      headerShown: false,
      title:'Sổ tiêm',
      tabBarIcon: ({ focused, color, size }) => (
        focused ? <Image source={images.isTabBook}
        style={[{ width: vScale(45), height: vScale(48) }]}
        ></Image>
        : <Image source={images.tabBook}
            style={[{ width: vScale(45), height: vScale(48) }]}
        ></Image>
      ),
    },
  },
  OtherScreen: {
    screen: Other,
    navigationOptions: {
      headerShown: false,
      title:'Khác',
      tabBarIcon: ({ focused, color, size }) => (
        focused ? <Image source={images.isTabOther}
        style={[{ width: vScale(48), height: vScale(48) }]}
        ></Image>
        : <Image source={images.tabOther}
            style={[{ width: vScale(50), height: vScale(50) }]}
        ></Image>
      ),
    },
  },

},
{

  tabBarOptions: {
    style:{
      position: 'absolute',
      backgroundColor: 'transparent',
      backgroundColor: colors.transparent,
      elevation: 0,
      shadowOpacity: 0,
      shadowColor: 'transparent',
      borderTopWidth:0,
      shadowRadius: 0,
      shadowOffset: {
          height: 0,
      },

      indicatorStyle: {
        backgroundColor: 'transparent'
        },
    },
    indicatorStyle: {
      backgroundColor: colors.transparent,
      backgroundColor: 'transparent'
    },
    backgroundColor: 'transparent',
    backgroundColor: colors.transparent,
    borderTopWidth:0,
    inactiveTintColor:'#747474',
    activeTintColor:'#C03869',
    tabStyle:{
      backgroundColor: 'transparent',
      backgroundColor: colors.transparent,
      backgroundColor: 'rgba(0, 0, 0, 0)',
    }
    
  },
}
);
  
export default Router;
  