import {Platform} from "react-native";

export const dimensions = {
    headerButtonSize: Platform.OS === "android" ? 50 : 44,
    searchBarSize: Platform.OS === "android" ? 44 : 34,
    actionSheetMarginTop: Platform.OS === "android" ? -30 : -30,
};
