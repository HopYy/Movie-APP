import { useState, useRef, useEffect } from 'react';
import Youtube from 'react-youtube'
import Spinner from '../loader/Spinner';

const TrailerVideo = ({ trailer, img }) => {
    const [loading, setLoading] = useState(false)
    const [isVideoReady, setIsVideoReady] = useState(false)
    const playerRef = useRef(null);

    useEffect(() => {
        if(trailer) setIsVideoReady(true)
    }, [trailer])

    const opts = {
        width: '100%',
        height: '100%',
        playerVars: {
          autoplay: 1,
          controls: 0,
          cc_load_policy: 0,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          mute: 1,
          contextMenu: 0,
          disablekb: 1,
        },
    };
    
    const handleVideoEnd = (event) => {
        setLoading(false)
        
        const player = event.target
        const REMOVE_LAST_15_SEC = 15
        const TRANSFER_TO_MILISECONDS = 1000
        const duration = player.getDuration();
        const restart = (duration - REMOVE_LAST_15_SEC) * TRANSFER_TO_MILISECONDS

        setTimeout(() => {
            player.seekTo(0)
        }, restart)
    }

    const handleVideoLoading = () => setLoading(true)
      
    return isVideoReady ? (
        <>
            <img className={`${loading ? 'block' : 'hidden'} w-full h-full object-cover object-center blur-sm`} src={img} alt="Background" />
            <Youtube
            videoId={trailer.key}
            className={`${loading ? 'hidden' : 'block'} w-full aspect-video h-max`}
            opts={opts}
            onPlay={handleVideoEnd}
            onReady={handleVideoLoading}
            ref={playerRef}
            />
        </>
    ) : (
        <Spinner />
    )
}

export default TrailerVideo