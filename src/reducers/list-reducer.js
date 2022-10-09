import { v4 as uuid } from "uuid";

const initialListValues = {
    linksList: [],
    eventsList: [],
    todoList: []
}

const listReducerFunction = (state, { type, payload }) => {
    const { linksList, eventsList, todoList } = state;

    switch (type) {
        // all lists
        case "SET_LISTS":
            return({
                ...state,
                linksList: [ ...payload.linksList ],
                eventsList: [ ...payload.eventsList ],
                todoList: [ ...payload.todoList ]
            });

        // links list
        case "ADD_LINK":
            return({
                ...state,
                linksList: [ 
                    ...linksList, 
                    { 
                        _id: uuid(), 
                        linkName: payload.linkName, 
                        link: payload.link 
                    } 
                ]
            });

        case "DELETE_LINK":
            return({
                ...state,
                linksList: [ ...linksList ].filter(({ _id }) => _id !== payload)
            });

        // events list
        case "ADD_EVENT":
            return({
                ...state,
                eventsList: [ 
                    ...eventsList, 
                    { 
                        _id: uuid(), 
                        name: payload.name, 
                        timestamp: payload.timestamp,
                        completed: false,
                    } 
                ]
            });

        case "DELETE_EVENT":
            return({
                ...state,
                eventsList: [ ...eventsList ].filter(({ _id }) => _id !== payload)
            });

        // todo list
        case "ADD_TODO":
            return({
                ...state,
                todoList: [ 
                    ...todoList, 
                    { 
                        _id: uuid(), 
                        todo: payload, 
                        isCompleted: false 
                    } 
                ]
            });
        
        case "TODO_COMPLETED_TOGGLE":
            return({
                ...state,
                todoList: [ ...todoList ].map((item) => {
                    return(
                        item._id === payload ?
                        { ...item, isCompleted: !item.isCompleted } :
                        { ...item } 
                    );
                })
            });

        case "DELETE_TODO":
            return({
                ...state,
                todoList: [ ...todoList ].filter(({ _id }) => _id !== payload )
            });

        default:
            return({ ...initialListValues });
    }
}

export { initialListValues, listReducerFunction };