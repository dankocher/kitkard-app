export const set_test = "set_test";

export default (state = null, action) => {
    switch(action.type)
    {
        case set_test:
            return action.test;
        default:
            return state;
    }
}
