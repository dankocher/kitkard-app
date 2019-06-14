export const show_card = "show_card";

export default (cardname = null, action) => {
    switch(action.type)
    {
        case show_card:
            return action.cardname;
        default:
            return cardname;
    }
}
