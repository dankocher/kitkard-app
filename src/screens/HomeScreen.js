import React from "react";
import {StatusBar, View, StyleSheet} from "react-native";
import {SafeAreaView} from "react-navigation";
import {hideTopBar} from "../constants/hideTopBar";
import Header from "../components/Header/Header";
import colors from "../constants/colors";
import {setTheme} from "../redux/actions";
import {connect} from "react-redux";
import {TouchableRipple, Text} from "react-native-paper";
import {Icon} from "../components/Icon";

class HomeScreen extends React.Component {
    static navigationOptions = () => (hideTopBar);
    render() {
        const color = colors[this.props.theme];
        return (
            <View style={[styles.view, {backgroundColor: color.background}]}>
                <StatusBar backgroundColor={color.primary} barStyle={`light-content`} />
                <Header />
                <View style={[styles.container, {backgroundColor: color.background}]}>
                    <Text>HOME</Text>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    theme: state.theme
});

const mapDispatchToProps = dispatch => ({
    setTheme: theme => dispatch(setTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

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