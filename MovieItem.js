import React, { useEffect } from 'react'
import MovieNavbar from './MovieNavbar'
import '../../styles/moviesCss/MovieDisplay.css'
import { AllMovies } from './AllMovies'
import Flickity from 'react-flickity-component'
import '../../styles/Flickity.css'
import { useParams } from 'react-router-dom'


function MovieItem() {


  useEffect(()=>{
    setTimeout(() => {
      document.querySelector('.movie-loader-bg').style.opacity='0'
    }, 1000)
    setTimeout(() => {
      document.querySelector('.movie-loader-bg').style.display='none'
    }, 1100)


    
  },[])

  const flickityOptions = {
    initialIndex: 1,
    autoPlay: true,
    wrapAround: true,
    // contain: true,
    pageDots: false
}

let selectedMovie

  let {title} = useParams()

  selectedMovie = AllMovies.find(AllMovies => AllMovies["Title"] == title)
  
  console.log("SM",selectedMovie);


  if(!selectedMovie){
    return(<div className='movie-display2'><h1 style={{color:'white', letterSpacing:'10px'}}>Oopss.. Movie Not Found</h1></div>)
  }
  else{
    return (<>
     <div className="movie-loader-bg">
        <div className="movie-loader"></div>
        <p style={{color:'white', fontWeight:'100'}}>Loading..</p>
      </div>
    
      <div className='movie-display'>
        <MovieNavbar />
          <div className="movie-display-content">
            <div className="m-topBar">
              <div className="topBar-left">
                <h2 className="tb-title">{selectedMovie["Title"]}</h2>
                <p className='tb-year'>{selectedMovie["Year"]} . {selectedMovie["Rated"]} . {selectedMovie["Runtime"]}</p>
              </div>
              <div className="topBar-right">
                <div className="tb-rating">
                  <h3>IMDb RATING</h3>
                  <div className='tb-rating-details'>
                      <div className="star1">
                        <svg stroke="currentColor" fill="gold" strokeWidth="0" viewBox="0 0 1024 1024" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
                      </div>
                      <div className='ratings'>
                        <span>{selectedMovie["imdbRating"]}</span>/10
                        <p>1.4M</p>
                      </div>
                  </div>
                </div>
                <div className="tb-rating">
                  <h3>YOUR RATING</h3>
                  <div className='tb-rating-details tb-r2'>
                      <div className="star2">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg>
                      </div>
                      <p className='ratings r2'>
                        Rate
                      </p>
                  </div>
                </div>
                <div className="tb-rating">
                  <h3>POPULARITY</h3>
                  <div className='tb-rating-details'>
                      <div className="star1">
                      <svg className='pop-rise' stroke="currentColor" fill="green" strokeWidth="0" viewBox="0 0 1024 1024" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M917 211.1l-199.2 24c-6.6.8-9.4 8.9-4.7 13.6l59.3 59.3-226 226-101.8-101.7c-6.3-6.3-16.4-6.2-22.6 0L100.3 754.1a8.03 8.03 0 0 0 0 11.3l45 45.2c3.1 3.1 8.2 3.1 11.3 0L433.3 534 535 635.7c6.3 6.2 16.4 6.2 22.6 0L829 364.5l59.3 59.3a8.01 8.01 0 0 0 13.6-4.7l24-199.2c.7-5.1-3.7-9.5-8.9-8.8z"></path></svg>
                      </div>
                      <div className='ratings'>
                        <span>{Math.floor(Math.random() * (500 - 200) + 200)}</span>
                      </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="display-movie">
              <div className="mov-poster">
                  <img src={selectedMovie["Poster"]} alt="" />
              </div>
              <div className="mov-slides">
              <Flickity
                className={'mov-carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded // default false
                reloadOnUpdate
                static
              >
                  {selectedMovie["Images"].map((i,key) => {
                    return(
                      <img key={key} className="mov-carousel-cell" src={i} />
                    )
                  })}
              </Flickity>  
              </div>
            </div>
  
            <div className="mov-genre">
              {selectedMovie["Genre"].split(', ').map((g,key) => {
                return(
                  <button key={key}>{g}</button>
                )
              })}
              
            </div>
  
            <div className="mov-displayBottom">
              <div className="mov-stats">
                <p>{selectedMovie["Plot"]}</p>
                <h5>Director &nbsp;{selectedMovie["Director"].split(', ').map((d,key) => {
                    return( <>&#183;
                      <a key={key}>{d}</a>
                     </>)})}
                </h5>
                <h5>Writer &nbsp;{selectedMovie["Writer"].split(', ').map((w,key) => {
                 return( <>&#183;
                          <a key={key}>{w}</a>
                         </>
                 )})}
                </h5>
                <h5>Stars &nbsp;{selectedMovie["Actors"].split(', ').map((a,key) => {
                 return(
                  <>&#183;
                  <a key={key}>{a}</a>
                 </>
                 )})}
                 </h5>
                
                
                <p>IMDb<span>Pro</span> See production, box office & company info</p>
              </div>
  
              <div className="mov-watchList">
                <div className="mov-big-btn">
                  <p>+</p>
                  <div>
                    <h3>Add to Watchlist</h3>
                    <h4>Added by {Math.floor(Math.random()*1000)} users</h4>
                  </div>
                  <p>|</p>
                </div>
                <div className="userReviews">
                 <p><span>{(Math.random()*10 +1).toFixed(1)}K</span> User reviews &nbsp; <span>{Math.floor(Math.random()*100)}</span> Critic reviews</p>
                 <p><span>{selectedMovie["Metascore"]}</span> Metascore</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      </>
    )
  }
  
  
}

export default MovieItem