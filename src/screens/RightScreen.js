import React from "react";
import {StyleSheet, StatusBar, Button, View} from 'react-native';
import {SafeAreaView} from "react-navigation";
import Text from "../components/Text";
import colors from "../constants/colors";
import {setTheme} from "../redux/actions";
import {connect} from "react-redux";
import {hideTopBar} from "../constants/hideTopBar";
import Header from "../components/Header/Header";

class RightScreen extends React.Component {
    static navigationOptions = () => (hideTopBar);
    render() {
        const { navigate, goBack } = this.props.navigation;
        const color = colors[this.props.theme];
        return (
            <View style={[styles.view, {backgroundColor: color.primary}]}>
                <StatusBar backgroundColor={color.primary} barStyle={`light-content`} />
                <SafeAreaView style={{flex: 0, backgroundColor: color.primary}}/>
                <SafeAreaView style={{flex: 1, backgroundColor: color.tabBar}}>
                    <Header onBack={() => this.props.navigation.goBack()}/>
                    <View style={[styles.container, {backgroundColor: color.background}]}>
                        <Text style={styles.paragraph}>Right Screen</Text>
                        <Button title={"Main"} onPress={() => navigate("Main")}/>
                        <Button title={"BottomView"} onPress={() => navigate("BottomView")}/>
                        <Button title={"Go Back"} onPress={() => goBack()}/>
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    container: {
        flex: 1,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps = state => ({
    theme: state.theme
});

const mapDispatchToProps = dispatch => ({
    setTheme: theme => dispatch(setTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RightScreen)