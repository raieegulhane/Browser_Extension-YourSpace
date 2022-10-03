import { createContext, useContext, useEffect, useReducer } from "react";
import { initialSettingValues, settingReducerFunction } from "../reducers";

const SettingContext = createContext(initialSettingValues);

const SettingProvider = ({ children }) => {
    const [settingState, settingDispatch] = useReducer(settingReducerFunction, initialSettingValues);

    useEffect(() => {
        const savedFocusMode = localStorage.getItem("focus-mode");
        const focusMode = !savedFocusMode ? false : JSON.parse(savedFocusMode);
        settingDispatch({ type: "SET_FOCUS_MODE", playload: focusMode });
        const savedClockFormat12 = localStorage.getItem("clock-format-12");
        const clockFormat12 = !savedClockFormat12 ? false : JSON.parse(savedClockFormat12);
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