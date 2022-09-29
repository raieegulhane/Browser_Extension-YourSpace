import { v4 as uuid } from "uuid";

const initialListValues = {
    linksList: [],
    eventsList: [],
    todoList: []
}

const listReducerFunction = (state, { type, payload }) => {
    const { linksList, eventsList, todoList } = state;

    switch (type) {
        // links list
        case "SET_LINKS_LIST":
            return({
                ...state,
                linksList: [ ...payload ]
            });

        case "ADD_LINK":
            return({
                ...state,
                linksList: [ ...linksList, { _id: uuid(), linkName: payload.linkName, link: payload.link } ]
            });

        case "DELETE_LINK":
            return({
                ...state,
                linksList: [ ...linksList ].filter(({ _id }) => _id !== payload)
            });

        // todo list
        case "SET_TODO_LIST":
            return({
                ...state,
                todoList: [ ...payload ]
            });

        case "ADD_TODO":
            return({
                ...state,
                todoList: [ ...todoList, { _id: uuid(), todo: payload } ]
            });
        
        case "EDIT_TODO":
            return({
                ...state,
                todoList: [ ...todoList ].map((item) => {
                    return(
                        item._id === payload._id ?
                        { ...item, todo: payload } :
                        { item }
                    );
                })
            });

        case "DELETE_TODO":
            return({
                ...state,
                todoList: [ ...todoList ].filter(({ _id }) => _id !== payload._id )
            });

        default:
            return({ ...initialListValues });
    }
}

export { initialListValues, listReducerFunction };