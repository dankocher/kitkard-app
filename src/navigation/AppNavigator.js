import React from "react";
import {Animated, Easing, Platform} from "react-native";
import {connect} from "react-redux";
import {
    createStackNavigator,
    createAppContainer,
    StackViewTransitionConfigs
} from "react-navigation";

import RightScreen from "../screens/RightScreen";
import BottomScreen from "../screens/BottomScreen";
import {setTheme} from "../redux/actions";
import MainNavigator from "./MainNavigator";
import {setNavigationBarColor} from "../utils/setNavigationBarColor";

const AppSwitchNavigator = createStackNavigator({
    Main: MainNavigator, // This screen renders a navigator!
    RightView: RightScreen,
    BottomView: BottomScreen,
}, {
    headerMode: "none",
    // mode: "card",
    mode: Platform.OS === "ios" ? "card" : "modal",
    // defaultNavigationOptions: {
    //     gesturesEnabled: false,
    // },
    // transitionConfig: dynamicModalTransition

    transitionConfig: (toTransitionProps, fromTransitionProps) => {
        if (fromTransitionProps != null && toTransitionProps != null) {
            const isBack = fromTransitionProps.navigation.state.index >= toTransitionProps.navigation.state.index;
            const routeName = isBack ? fromTransitionProps.scene.route.routeName : toTransitionProps.scene.route.routeName;

            switch (routeName) {
                case "RightView":

                    return Platform.OS === "ios" ? dynamicModalTransition :
                        {
                            transitionSpec: {
                                duration: 400,
                                easing: Easing.inOut(Easing.poly(4)),
                                timing: Animated.timing,
                            },
                            screenInterpolator: sceneProps => {
                                const {layout, position, scene} = sceneProps;
                                const {index} = scene;

                                const height = layout.initHeight;
                                const translateX = position.interpolate({
                                    inputRange: [index - 1, index, index + 1],
                                    outputRange: [height, 0, 0],
                                });

                                const opacity = position.interpolate({
                                    inputRange: [index - 1, index - 0.99, index],
                                    outputRange: [0, 1, 1],
                                });

                                return {opacity, transform: [{translateX}]};
                            },
                        };

                case "BottomView":
                    return {
                        transitionSpec: {duration: 0},
                    };
                default:
                    return dynamicModalTransition
            }
        }
        return dynamicModalTransition
    },
});


const AppContainer = createAppContainer(AppSwitchNavigator);

class AppNavigator extends React.Component {

    componentDidMount() {
        setNavigationBarColor(this.props.theme)
    }

    render() {
        return (
            <AppContainer/>
        );
    }
}

const mapStateToProps = state => ({
    theme: state.theme,
});

const mapDispatchToProps = dispatch => ({
    setTheme: theme => dispatch(setTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator)


const IOS_MODAL_ROUTES = ['OptionsScreen'];

let dynamicModalTransition = (transitionProps, prevTransitionProps) => {
    const isModal = IOS_MODAL_ROUTES.some(
        screenName =>
            screenName === transitionProps.scene.route.routeName ||
            (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
    );
    return StackViewTransitionConfigs.defaultTransitionConfig(
        transitionProps,
        prevTransitionProps,
        isModal
    );
};
