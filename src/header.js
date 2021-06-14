import './header.css';


import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';

import YoutubeLogo from './youtubelogo.png';

export default function Header() {

    return (
        <div className="header">
           <div className="header__logo">
               <img src={YoutubeLogo} className="header__logo__image" />
           </div>
           <div className="header__search">
               <input type="text" placeholder='Search...' className="header__search__input" />
               <SearchIcon />
           </div>

           <div className="header__buttons">
               <NotificationsIcon />
               <AppsIcon />
               <Avatar src='' className='header__buttons__avatar'/>

           </div>
        </div>
    )
}