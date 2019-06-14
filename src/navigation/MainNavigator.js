import React from "react";
import {View} from "react-native";
import {createBottomTabNavigator, createStackNavigator} from "react-navigation";

import TabBarIcon from '../components/TabBar/TabBarIcon';
import TabBarComponent from "../components/TabBar/TabBarComponent";

import SettingsScreen from "../screens/SettingsScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import SearchScreen from "../screens/SearchScreen";
import HomeScreen from "../screens/HomeScreen";
import CardholderScreen from "../screens/CardholderScreen";

//////////////////// Settings ///////////////////////
const SettingsStack = createStackNavigator({SettingsScreen});
SettingsStack.navigationOptions = {tabBarLabel: <View/>, tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={'settings'} /> )};

//////////////////// NOTIFICATIONS ///////////////////////
const NotificationStack = createStackNavigator({NotificationsScreen});
NotificationStack.navigationOptions = {tabBarLabel: <View/>, tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={'notifications'} /> )};

//////////////////// Home ///////////////////////
const HomeStack = createStackNavigator({HomeScreen});
HomeStack.navigationOptions = {tabBarLabel: <View/>, tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={'my_cards'} /> )};

//////////////////// NOTIFICATIONS ///////////////////////
const SearchStack = createStackNavigator({SearchScreen});
SearchStack.navigationOptions = {tabBarLabel: <View/>, tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={'search'} /> )};

//////////////////// NOTIFICATIONS ///////////////////////
const CardholderStack = createStackNavigator({CardholderScreen});
CardholderStack.navigationOptions = {tabBarLabel: <View/>, tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={'cardholder'} /> )};

const MainNavigator = createBottomTabNavigator({
    Settings: SettingsStack,
    Notifications: NotificationStack,
    Home: HomeStack,
    Search: SearchStack,
    Cardholder: CardholderStack,
}, {
    initialRouteName: "Home",
    tabBarComponent: (props) => {
        return (
            <TabBarComponent {...props} />
        )
    },
});


export default MainNavigator;