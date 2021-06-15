import './header.css';


import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';

import YoutubeLogo from './youtubelogo.png';
import {useSelector, useDispatch} from 'react-redux';

import {useState} from 'react';

const key = 'AIzaSyDSi0WUxsJXmU2ZcRQN6WDwylGjQI-9eGY';




export default function Header() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [search, setSearch] = useState('');
   
   

    const oathAccessToken = user[0][0].accessToken;

    const startsearch = () => {
        dispatch({type: 'SEARCH', payload: search});
        dispatch({type: 'CHANGE', payload: 'search'});
    }

    return (
        <div className="header">
           <div className="header__logo">
               <img src={YoutubeLogo} className="header__logo__image" />
           </div>
           <div className="header__search">
               <input type="text" placeholder='Search...' className="header__search__input" onChange={(e) => setSearch(e.target.value)} />
               <SearchIcon onClick={() => startsearch()} />
           </div>

           <div className="header__buttons">
               <NotificationsIcon />
               <AppsIcon />
               <Avatar src={user[0][1].photoURL} className='header__buttons__avatar'/>

           </div>
        </div>
    )
}