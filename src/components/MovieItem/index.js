// import {useState, useEffect} from 'react'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'

import './index.css'

const MovieItem = props => {
  const {eachMovieDetails} = props
  // const [playing, setPlaying] = useState(false)
  const {thumbnailUrl, videoUrl} = eachMovieDetails
  // const onClickPlayer = () => {
  //   setPlaying(!playing)
  // }

  return (
    <div className="each-movie-container">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
        }
      >
        {close => (
          <div className="pop-video-container">
            <button
              type="button"
              data-testid="closeButton"
              aria-label="Close popup"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose size="30" />
            </button>
            <div className="react-player-container">
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
