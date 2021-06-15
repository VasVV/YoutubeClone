import './sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useDispatch} from 'react-redux';

export default function Sidebar() {

    const dispatch = useDispatch();

    return (

        <div className="sidebar">
            <div className="sidebar__elem" onClick={() => dispatch({type: 'CHANGE', payload: 'dashboard'})}>
                <HomeIcon /> <span className='sidebar__elem__text'>Home</span>
            </div>
            <div className="sidebar__elem" onClick={() => dispatch({type: 'CHANGE', payload: 'subscriptions'})}>
                <SubscriptionsIcon /> <span className='sidebar__elem__text'>Subscriptions</span> 
            </div>
            <div className="sidebar__elem" onClick={() => dispatch({type: 'CHANGE', payload: 'liked'})}>
                <ThumbUpIcon /> <span className='sidebar__elem__text'>Liked videos</span> 
            </div>
            <div className="sidebar__elem">
                <ExitToAppIcon /> <span className='sidebar__elem__text' onClick={() => dispatch({type: 'REMOVE_CURR_USER'})}>Log out</span> 
            </div>
            
           


        </div>
    )
}