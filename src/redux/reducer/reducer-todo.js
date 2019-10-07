const defaultState = {
    list: [],
    count: [5, 6]
};

const todoReducer = (state = defaultState, actions) => {
    switch (actions.type) {
        // case "ADD_TODO_ITEM":
        //     return {
        //         ...state,
        //         list: actions.payload
        //     };
        // case "DELETE_TODO_ITEM":
        //     return {
        //         ...state,
        //         list: actions.payload
        //     };
        // case "TODO_COMPLETED":
        //     return {
        //         ...state,
        //         list: actions.payload
        //     };
        // case "TODO_EDITED":
        //     return {
        //         ...state,
        //         list: actions.payload
        //     };
        case "LOAD_DATA_START":
            return {
                ...state,
                loading: true,
                list: []
            };
        case "LOAD_DATA_SUCCESS":
            return {
                ...state,
                list: actions.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default todoReducer;
