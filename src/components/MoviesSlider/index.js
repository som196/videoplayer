import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesArray} = props

  const settings = {
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {moviesArray.map(eachMovieDetails => (
          <MovieItem
            eachMovieDetails={eachMovieDetails}
            key={eachMovieDetails.id}
          />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
