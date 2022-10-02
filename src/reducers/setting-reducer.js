const initialSettingValues = {
    focusMode: false,
    clockFormat12: false
}

const settingReducerFunction = (state, { type, payload }) => {
    const { focusMode, clockFormat12 } = state;

    switch (type) {
        case "SET_FOCUS_MODE":
            return({
                ...state,
                focusMode: payload
            });

        case "TOGGLE_FOCUS_MODE":
            return({
                ...state,
                focusMode: !focusMode
            });

        case "SET_CLOCK_FORMAT":
            return({
                ...state,
                clockFormat12: payload
            });

        case "TOGGLE_CLOCK_FORMAT":
            return({
                ...state,
                clockFormat12: !clockFormat12
            });

        default:
            return({ ...initialSettingValues });
    }
}

export { initialSettingValues, settingReducerFunction };