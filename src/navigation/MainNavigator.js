import {View} from "react-native";
import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import TabBarIcon from '../components/TabBar/TabBarIcon';
import SettingsScreen from "../screens/SettingsScreen";
import HomeScreen from "../screens/HomeScreen";
import TabBarComponent from "../components/TabBar/TabBarComponent";
import React from "react";

//////////////////// Settings ///////////////////////
const SettingsStack = createStackNavigator({SettingsScreen});
SettingsStack.navigationOptions = {tabBarLabel: <View/>, tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={'settings'} /> )};

//////////////////// Home ///////////////////////
const HomeStack = createStackNavigator({HomeScreen});
HomeStack.navigationOptions = {tabBarLabel: <View/>, tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name={'my_cards'} /> )};

const MainNavigator = createBottomTabNavigator({
    Settings: SettingsStack,
    Home: HomeStack,
}, {
    initialRouteName: "Home",
    tabBarComponent: (props) => {
        return (
            <TabBarComponent {...props} />
        )
    },
});


export default MainNavigator;