const initialFocusState = {
    focus: "",
    isEditing: false,
    isCompleted: false
}

const focusReducerFunction = (state, { type, payload }) => {
    switch (type) {
        case "SET_FOCUS":
            localStorage.setItem("focus", payload);
            return({
                ...state,
                focus: payload
            });

        case "INIT_EDIT_FOCUS": 
            return({
                ...state,
                isEditing: payload
            });

        case "UPDATE_COMPLETED_STATE":
            localStorage.setItem("isCompleted", payload);
            return({
                ...state,
                isEditing: false,
                isCompleted: payload
            });

        case "DELETE_FOCUS":
            localStorage.removeItem("focus");
            localStorage.removeItem("isCompleted");
            return({ ...initialFocusState });

        default:
            return({ ...initialFocusState });
    }
}

export { initialFocusState, focusReducerFunction };