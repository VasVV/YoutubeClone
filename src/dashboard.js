import './dashboard.css';
import CardMedia from '@material-ui/core/CardMedia';
import ThumbnailPlaceholder from './thumbnail-placeholder.jpg';
import Avatar from '@material-ui/core/Avatar';
import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';


const key = 'AIzaSyDSi0WUxsJXmU2ZcRQN6WDwylGjQI-9eGY';

export default function Dashboard() {

    const user = useSelector(state => state.user);
    const currpage = useSelector(state => state.changepage);
    const searchTrue = useSelector(state => state.search);

    const oathAccessToken = user[0][0].accessToken;

    const dispatch = useDispatch();
    let history = useHistory();

    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [page, setPage] = useState(1);

    const [nextPageSearchToken, setNextPageSearchToken] = useState(null);
    const [searchPage, setSearchPage] = useState(1);
    


    useEffect(() => {
        if (searchTrue.length > 0) {
            getSearchResults()
        }

    },[searchTrue])


    const getSearchResults = async() => {
        if (!nextPageSearchToken) {
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTrue}&key=${key}`, {
            method: 'GET', 
            headers: new Headers({
              'Authorization': `Bearer ${oathAccessToken}`, 
              'Content-Type': 'application/json'
            }), 
        });
        const json = await res.json();
        setVideos(json.items)
        setNextPageSearchToken(json.nextPageToken)  
        setSearchPage(prevPage => prevPage+1);

        console.log('get search results initial fired');
            } else {

                const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTrue}&key=${key}&pageToken=${nextPageSearchToken}`, {
            method: 'GET', 
            headers: new Headers({
              'Authorization': `Bearer ${oathAccessToken}`, 
              'Content-Type': 'application/json'
            }), 
        });
        const json = await res.json();
        setVideos(prevState => [...prevState, ...json.items] );
            setNextPageSearchToken(json.nextPageToken)  
            setSearchPage(prevPage => prevPage+1)
            console.log('get search results fired next');
           
            }
    }

    const getSubscriptions = async () => {
        

        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/subscriptions?mine=true&part=snippet&key=${key}`, {
            method: 'GET', 
            headers: new Headers({
              'Authorization': `Bearer ${oathAccessToken}`, 
              'Content-Type': 'application/json'
            }), 
        });
        let json = await res.json();
       
       setVideos(json.items)
    }

    const getLikedVideos = async() => {
        
       


        const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?myRating=like&part=snippet&maxResults=10`, {
            method: 'GET', 
            headers: new Headers({
              'Authorization': `Bearer ${oathAccessToken}`, 
              'Content-Type': 'application/json'
            }), 
        });
        const json = await res.json();
        setVideos(json.items);

    }

    const getMostPopular = async() => {
        
        if (!nextPageToken) {
            const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=${key}&part=snippet&maxResults=10`);
            const json = await res.json();

           
            console.log('get most popular fired')
            setVideos(json.items)
            setNextPageToken(json.nextPageToken)  
            setPage(prevPage => prevPage+1)
        }
        else {
            const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=${key}&part=snippet&maxResults=10&pageToken=${nextPageToken}`);
            const json = await res.json();

           
            console.log('get most popular fired next');
            setVideos(prevState => [...prevState, ...json.items] );
            setNextPageToken(json.nextPageToken)  
            setPage(prevPage => prevPage+1)

        } 
    }

    useEffect( () => {
        getMostPopular();
       
    },[]);

    useEffect(() => {
        if (currpage == 'liked') {
            setNextPageSearchToken(null)
            setVideos([]);
            setPage(1);
            setNextPageToken(null);
            getLikedVideos();
        } else if (currpage == 'dashboard') {
            setNextPageSearchToken(null)

            setVideos([]);
            setPage(1);
            setNextPageToken(null);
            getMostPopular();
        } else if (currpage == 'subscriptions') {
            setNextPageSearchToken(null)

            setVideos([]);
            setPage(1);
            setNextPageToken(null);
            getSubscriptions()
        } 

    },[currpage]);

    // useEffect( () => {
        
    //         setVideos([]);
    //         setSearchPage(1);
    //         setNextPageSearchToken(null);
    //         getSearchResults();
        

    // },[searchTrue])


    const gotovideopage = id => {
        dispatch({type: 'ADD_VIDEO_ID', payload: id });
        history.push("/video");
    }

    return (
        <div className="dashboard" id='dashboard'>

            <InfiniteScroll
                dataLength={searchPage ? searchPage * 10 : page * 10} 
                next={currpage == 'dashboard' ? () => getMostPopular() ? currpage == 'liked' ? () => getLikedVideos() ? currpage == 'search' ? () => getSearchResults() : "" : "" : '' : '' : ''}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                    </p>
                }
                >
                  
                 {videos?.map(e => {
                     
               return (
                  
                   
                   <div className="dashboard__video" onClick={e.kind == 'youtube#video' ? () => gotovideopage(e.id) : ''}>
                        <img src={e.snippet.thumbnails.standard ? e.snippet.thumbnails.standard.url :  e.snippet.thumbnails.default.url} className='dashboard__video__thumbnail' />
                        <br />
                        <div className="dashboard__video__info">
                            <div className="dashboard__video__info__name">
                                <span className="dasboard__video__name">{e.snippet.title}</span>
                            </div> 
                            <div className="dashboard__video__info__views-uploaded">
                            <span className="dasboard__video__views">2m views</span> · <span className="dasboard__video__uploaded">{e.snippet.publishedAt}</span>
                            </div>

                            <div className="dashboard__video__info__uploader">
                                <Avatar src='' />
                                <span className="dashboard__video__info__uploader__name">{e.snippet.channelTitle}</span>
                            </div>    
                        </div>
                        
                        <br />
                        
                       </div>
               )
           }
        )}
            </InfiniteScroll>
           
          
        </div>
    )
}