import React from "react";
import {StyleSheet, StatusBar, Button, View} from 'react-native';
import Text from "../components/Text";
import {setTheme} from "../redux/actions";
import {connect} from "react-redux";
import colors from "../constants/colors";
import {hideTopBar} from "../constants/hideTopBar";
import Header from "../components/Header/Header";
import {setNavigationBarColor} from "../utils/setNavigationBarColor";

class SettingsScreen extends React.Component {
    static navigationOptions = () => (hideTopBar);

    toggleTheme = async () => {
        const newTheme = this.props.theme === "light" ? "dark" : "light";
        await this.props.setTheme(newTheme);
        setNavigationBarColor(newTheme);
    };

    render() {
        const color = colors[this.props.theme];
        return (
            <View style={[styles.view, {backgroundColor: color.background}]}>
                <StatusBar backgroundColor={color.primary} barStyle={`light-content`} />
                <Header/>
                <View style={[styles.container, {backgroundColor: color.background}]}>
                    <Text style={styles.paragraphTop}>This is top text.</Text>
                    <Text style={styles.paragraphBottom}>This is bottom text.</Text>
                    <Button title={"Right"} onPress={() => this.props.navigation.navigate("RightView")}/>
                    <Button title={this.props.theme === "light" ? "Dark" : "Light"} onPress={this.toggleTheme}/>

                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    container: {
        flex: 1,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    paragraphTop:{
        position: "absolute",
        top: 0
    },
    paragraphBottom:{
        position: "absolute",
        bottom: 0
    }
});

const mapStateToProps = state => ({
    theme: state.theme
});

const mapDispatchToProps = dispatch => ({
    setTheme: theme => dispatch(setTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)