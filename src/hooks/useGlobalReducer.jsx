import { useContext, useReducer, createContext } from "react";
import { initialState, reducer } from "../store"


export const StoreContext = createContext({ store: {}, dispatch: () => { } })

export const StoreProvider = ({ children }) => {

    const [store, dispatch] = useReducer(reducer, initialState)

    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {children}
        </StoreContext.Provider>)
};


export function useGlobalReducer() {
    const { dispatch, store } = useContext(StoreContext)
    return { dispatch, store };
}