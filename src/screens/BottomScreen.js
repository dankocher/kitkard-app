import React from "react";
import {StyleSheet, StatusBar, Button} from 'react-native';
import {SafeAreaView} from "react-navigation";
import Text from "../components/Text";
import {hideTopBar} from "../constants/hideTopBar";

class SettingsScreen extends React.Component {
    static navigationOptions = () => (hideTopBar);
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="red" barStyle="light-content" />
                <Text style={styles.paragraph}>Bottom Screen</Text>
                <Button title={"Main"} onPress={() => navigate("Main")}/>
                <Button title={"RightView"} onPress={() => navigate("RightView")}/>
                <Button title={"Go Back"} onPress={() => goBack()}/>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
    },
    paragraph:{

    }
});

export default SettingsScreen