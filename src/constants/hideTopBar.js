import colors from "./colors";
import {Platform} from "react-native";

export const hideTopBar = {
    name: '',
    headerMode: "none",
    mode: "none",
    headerTintColor: 'white',
    headerStyle: {
        backgroundColor: colors.light.primary,
        marginTop: Platform.OS === 'ios' ? 0 : -27,
        height: 0,
        paddingTop: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        elevation: 0
    }
};
export const hideTopBarHeader = {
    name: '',
    headerMode: "none",
    mode: "none",
    headerTintColor: 'white',
    headerStyle: {
        backgroundColor: colors.light.primary,
        marginTop: Platform.OS === 'ios' ? -44 : -27,
        height: 0,
        paddingTop: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        elevation: 0
    }
};