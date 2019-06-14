import {selected_theme} from "../reducers/theme";
export const setTheme = (theme) => ({
    type: selected_theme,
    theme
});
