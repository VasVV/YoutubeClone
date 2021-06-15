const change = (state = 'dashboard', action) => {
    switch (action.type) {
        case 'CHANGE':
            return action.payload;
        default:
            return state    
    }
};

export default change;
            