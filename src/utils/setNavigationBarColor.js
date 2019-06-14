import {Platform} from "react-native";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import colors from "../constants/colors"

export const setNavigationBarColor = async (theme) => {
    const color = colors[theme].tabBar;
    const icons = theme === "light";
    if (Platform.OS === "android") {
        try {
            if (color !== undefined) {
                await changeNavigationBarColor(color, icons);
            } else {
                console.log("ERROR: color is undefined")
            }
        } catch (e) {
            console.log(e)
        }
    }
};
