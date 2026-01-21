
export const initialState = {
    favorites: [],
};

export const reducer = (state, action) => {
    switch (action.type) {

        case "ADD_FAVORITE":

            if (
                !action.payload ||
                state.favorites.find(item => item.uid === action.payload.uid)
            ) {
                return state;
            }
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };

        case "REMOVE_FAVORITE":
            return {
                ...state,
                favorites: state.favorites.filter(item => item.uid !== action.payload),
            };

        default:
            return state;
    }
};