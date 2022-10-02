import { createContext, useContext, useEffect, useReducer } from "react";
import { initialSettingValues, settingReducerFunction } from "../reducers";

const SettingContext = createContext(initialSettingValues);

const SettingProvider = ({ children }) => {
    const [settingState, settingDispatch] = useReducer(settingReducerFunction, initialSettingValues);

    useEffect(() => {
        const focusMode = JSON.parse(localStorage.getItem("focus-mode"));
        settingDispatch({ type: "SET_FOCUS_MODE", playload: focusMode });
        const clockFormat12 = JSON.parse(localStorage.getItem("clock-format-12"));
        settingDispatch({ type: "SET_CLOCK_FORMAT", playload: clockFormat12 });
    }, []);

    return(
        <SettingContext.Provider value={{ settingState, settingDispatch }}>
            { children }
        </SettingContext.Provider>
    );
}

const useSetting = () => useContext(SettingContext);

export { SettingProvider, useSetting };