const changeid = (state = '', action) => {
    switch (action.type) {
        case 'ADD_VIDEO_ID':
            return action.payload;
        default:
            return state    
    }
};

export default changeid;