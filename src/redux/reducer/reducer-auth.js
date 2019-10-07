const defaultState = {
    isLoggedIn: false,
    userDetails: {
        displayName: "",
        emailId: "",
        uid: ""
    }
};

export default (state = defaultState, actions) => {
    switch (actions.type) {
        case "LOGIN":
            return {
                ...state,
                isLoggedIn: true,
                payload: actions.payload
            };

        case "LOGOUT":
            return {
                ...state,
                isLoggedIn: false,
                payload: defaultState.userDetails
            };

        default:
            return state;
    }
};
