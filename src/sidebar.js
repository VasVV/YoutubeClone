import './sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function Sidebar() {

    return (

        <div className="sidebar">
            <div className="sidebar__elem">
                <HomeIcon /> <span className='sidebar__elem__text'>Home</span>
            </div>
            <div className="sidebar__elem">
                <SubscriptionsIcon /> <span className='sidebar__elem__text'>Subscriptions</span> 
            </div>
            <div className="sidebar__elem">
                <ThumbUpIcon /> <span className='sidebar__elem__text'>Liked videos</span> 
            </div>
            <div className="sidebar__elem">
                <ExitToAppIcon /> <span className='sidebar__elem__text'>Log out</span> 
            </div>
            
           


        </div>
    )
}