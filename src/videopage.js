import './videopage.css';
import {useSelector} from 'react-redux';
import YouTube from 'react-youtube';
const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

export default function VideoPage() {

    const videoId = useSelector(state => state.changeid);

    const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

    return (
        <div className="videopage">
            !!
           <iframe width="560"
        height="315"
        src="https://www.youtube.com/embed/-7fuHEEmEjs"
        frameborder="0"
        allow="autoplay;
        encrypted-media"
        allowfullscreen></iframe>
        </div>
    )
}