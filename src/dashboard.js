import './dashboard.css';
import CardMedia from '@material-ui/core/CardMedia';
import ThumbnailPlaceholder from './thumbnail-placeholder.jpg';
import Avatar from '@material-ui/core/Avatar';

export default function Dashboard() {

    return (
        <div className="dashboard">
           
           {[1,2,3,4,5,6,7,8,9,10,11,1,2,3,4,3,3,3,3,3,3,3,33,].map(e => {

               return (
                   <div className="dashboard__video">
                        <img src={ThumbnailPlaceholder} className='dashboard__video__thumbnail' />
                        <br />
                        <div className="dashboard__video__info">
                            <div className="dashboard__video__info__name">
                                <span className="dasboard__video__name">Video name</span>
                            </div> 
                            <div className="dashboard__video__info__views-uploaded">
                            <span className="dasboard__video__views">2m views</span> · <span className="dasboard__video__uploaded">2 days ago</span>
                            </div>

                            <div className="dashboard__video__info__uploader">
                                <Avatar src='' />
                                <span className="dashboard__video__info__uploader__name">Channel name</span>
                            </div>    
                        </div>
                        
                        <br />
                        
                       </div>
               )
           })}
        </div>
    )
}