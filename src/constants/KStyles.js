import {Platform, StyleSheet} from "react-native";
import {dimensions} from "./dimensions";
import colors from "../constants/colors";

export const KStyles = StyleSheet.create({
    headerButton: {
        width: dimensions.headerButtonSize,
        height: dimensions.headerButtonSize,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        backgroundColor: colors.light.primary,
        borderBottomWidth: 0,
        elevation: 0,
        height: Platform.OS === 'ios' ? 64 : 80,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        // marginTop: Platform.OS === 'ios' ? 0 : 0,

        // backgroundColor: 'green'
    },
    headerCenterContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Platform.OS === "android" ? 56 : 46
    },
    headerTitle: {
        color: 'white',
        // backgroundColor: 'blue'
    },
    headerRightButton: {
        width: dimensions.headerButtonSize,
        height: dimensions.headerButtonSize,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    headerRightContainer: {
        // backgroundColor: "blue"
    }

});
