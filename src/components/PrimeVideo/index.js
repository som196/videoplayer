import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesArray = moviesList.filter(
    eachMovieDetails => eachMovieDetails.categoryId === 'ACTION',
  )
  const comedyMoviesArray = moviesList.filter(
    eachMovieDetails => eachMovieDetails.categoryId === 'COMEDY',
  )

  return (
    <div className="everything-container">
      <div className="banner-img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="banner-img"
        />
      </div>
      <div className="all-movies-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider moviesArray={actionMoviesArray} />

        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider moviesArray={comedyMoviesArray} />
      </div>
    </div>
  )
}

export default PrimeVideo
