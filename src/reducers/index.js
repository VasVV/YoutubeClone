import { combineReducers } from 'redux';
import user from './user';
import changepage from './changepage';
import changeid from './changeid';
import search from './search';

export default combineReducers({
    user, 
    changepage, 
    changeid,
    search,
})