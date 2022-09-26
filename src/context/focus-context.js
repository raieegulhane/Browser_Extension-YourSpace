import { createContext, useContext, useReducer } from "react";
import { initialFocusState, focusReducerFunction } from "../reducers/focus-reducer";

const FocusContext = createContext(initialFocusState);

const FocusProvider = ({ children }) => {
    const [focusState, focusDispatch] = useReducer(focusReducerFunction, initialFocusState);

    return(
        <FocusContext.Provider value={{ focusState, focusDispatch }}>
            { children }
        </FocusContext.Provider>
    );
}

const useFocus = () => useContext(FocusContext);

export { FocusProvider, useFocus };