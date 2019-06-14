import { combineReducers } from 'redux';

import theme from './theme';
import screen from './screen';
import language from './language';
import user from './user';
import session from './session';
import selectedCard from './selectedCard';
import modalCard from './modalCard';
import cards from './cards';
import notifications from './notifications';
import friends from './friends';
import share from './share';
import test from './test';
// import pictures from './pictures';

export default combineReducers({
    theme,
    screen,
    language,
    user,
    cards,
    notifications,
    friends,
    session,
    selectedCard,
    modalCard,
    share,
    test,
    // pictures: pictures,
});
