import React, { useEffect } from 'react'
import { useState } from 'react'
import '../../styles/moviesCss/Movies.css'
import { AllMovies } from './AllMovies'
import MovieNavbar from './MovieNavbar'

import { useNavigate, useParams } from 'react-router-dom'


function Movies() {

  useEffect(()=>{
    setTimeout(() => {
      document.querySelector('.movie-loader-bg').style.opacity='0'
    }, 1000)
    setTimeout(() => {
      document.querySelector('.movie-loader-bg').style.display='none'
    }, 1100)
    
  },[])

  const [moreInfo, setMoreInfo] = useState(false) 
  
  useEffect(() => {
    document.querySelector(".fullScreen").style.backgroundImage = 'url('+AllMovies[0]["Images"][0]+')'
    document.querySelector('.movie-title').innerHTML = AllMovies[0]["Title"]
    document.querySelector('.movie-descr').innerHTML = AllMovies[0]["Plot"]
    document.querySelector('.movie-genre').innerHTML = 'Genre: '+AllMovies[0]["Genre"]
  },[])

  function displayMovie(t){
    document.querySelector('.fullScreen').style.cssText += 'transition: .8s ease'

    setMoreInfo(false)
    document.querySelector('.movie-descr').style.cssText += '-webkit-line-clamp: 3'

    let rectAll = document.querySelectorAll('.movie-item'),i;
  
    let activeDiv = document.querySelector('.movie-item.active')
    const actInd = Array.from(rectAll).indexOf(activeDiv)
    // console.log(actInd);
     
    let clicked = Array.from(rectAll).indexOf(t.currentTarget)
    // console.log(clicked);
    let diff = Math.abs(clicked-actInd)

    if(diff == 0){

    }
    else{
      for(i=0;i<rectAll.length;i++){
        rectAll[i].classList.remove('active')
      }
      rectAll[clicked-1].classList.add('active')
      
      if(clicked > actInd){
        moveLeft(diff)
      }else if(clicked < actInd){
        moveRight(diff)
      }
    }
    
  }

  function moveLeft(d){
    document.querySelector('.fullScreen').style.cssText += 'transition: .8s ease'

    setMoreInfo(false)
    document.querySelector('.movie-descr').style.cssText += '-webkit-line-clamp: 3'
    document.querySelector('.movie-descr-cont').style.cssText += 'top:-1000px; transition:none'

    if(matchMedia('(max-width: 573px)').matches){
      let rectAll = document.querySelectorAll('.movie-item'),i;
      let activeDiv = document.querySelector('.movie-item.active')
      const activeIndex = Array.from(rectAll).indexOf(activeDiv)
      
      activeDiv.classList.remove("active");
      // console.log(getComputedStyle(activeDiv).left)

      if (activeIndex < rectAll.length - 1) {
        rectAll[activeIndex + 1].classList.add("active");
        rectAll[activeIndex + 1].style.left = null
      let bgc = document.querySelector('.movie-item.active').getElementsByTagName('p')[0].innerHTML
      document.querySelector('.fullScreen').style.backgroundImage = 'url('+bgc+')'

      let mTitle = document.querySelector('.movie-item.active').getElementsByTagName('p')[1].innerHTML
      let mDescr = document.querySelector('.movie-item.active').getElementsByTagName('p')[2].innerHTML
      let mGenre = document.querySelector('.movie-item.active').getElementsByTagName('p')[3].innerHTML

      document.querySelector('.movie-title').innerHTML = mTitle
      document.querySelector('.movie-descr').innerHTML = mDescr
      document.querySelector('.movie-genre').innerHTML = mGenre
      }else if(activeIndex == rectAll.length - 1){
        rectAll[0].classList.add('active')
        rectAll[0].style.left = null
      let bgc = document.querySelector('.movie-item.active').getElementsByTagName('p')[0].innerHTML
      document.querySelector('.fullScreen').style.backgroundImage = 'url('+bgc+')'

      let mTitle = document.querySelector('.movie-item.active').getElementsByTagName('p')[1].innerHTML
      let mDescr = document.querySelector('.movie-item.active').getElementsByTagName('p')[2].innerHTML
      let mGenre = document.querySelector('.movie-item.active').getElementsByTagName('p')[3].innerHTML

      document.querySelector('.movie-title').innerHTML = mTitle
      document.querySelector('.movie-descr').innerHTML = mDescr
      document.querySelector('.movie-genre').innerHTML = mGenre
      }
    }
    else{
    let dd = d
    let moveAmount

    if(typeof(dd) == 'number'){
      moveAmount = -100*dd
    }else if(typeof(dd) == 'object'){
      moveAmount= -100
    }    

    let rectAll = document.querySelectorAll('.movie-item'),i;
    let activeDiv = document.querySelector('.movie-item.active')
    const activeIndex = Array.from(rectAll).indexOf(activeDiv)

    if (activeIndex < rectAll.length - 1) {
      activeDiv.classList.remove("active");
      rectAll[activeIndex + 1].classList.add("active");
      const currentLeft = parseInt(window.getComputedStyle(document.querySelector('.movie-item')).left, 10);
      // console.log(currentLeft);
  
      let newLeft = currentLeft + moveAmount
  
      for(i=0;i<rectAll.length;i++){
        rectAll[i].style.left = newLeft + 'px'
      }

      let bgc = document.querySelector('.movie-item.active').getElementsByTagName('p')[0].innerHTML
      document.querySelector('.fullScreen').style.backgroundImage = 'url('+bgc+')'

      let mTitle = document.querySelector('.movie-item.active').getElementsByTagName('p')[1].innerHTML
      let mDescr = document.querySelector('.movie-item.active').getElementsByTagName('p')[2].innerHTML
      let mGenre = document.querySelector('.movie-item.active').getElementsByTagName('p')[3].innerHTML

      document.querySelector('.movie-title').innerHTML = mTitle
      document.querySelector('.movie-descr').innerHTML = mDescr
      document.querySelector('.movie-genre').innerHTML = mGenre

    }else if(activeIndex == rectAll.length - 1){
      for(i=0;i<rectAll.length;i++){
        rectAll[i].classList.remove('active')
        rectAll[i].style.left = 0;
      }
      rectAll[0].classList.add('active')
      let bgc = document.querySelector('.movie-item.active').getElementsByTagName('p')[0].innerHTML
      document.querySelector('.fullScreen').style.backgroundImage = 'url('+bgc+')'

      let mTitle = document.querySelector('.movie-item.active').getElementsByTagName('p')[1].innerHTML
      let mDescr = document.querySelector('.movie-item.active').getElementsByTagName('p')[2].innerHTML
      let mGenre = document.querySelector('.movie-item.active').getElementsByTagName('p')[3].innerHTML

      document.querySelector('.movie-title').innerHTML = mTitle
      document.querySelector('.movie-descr').innerHTML = mDescr
      document.querySelector('.movie-genre').innerHTML = mGenre
    }
  }
  }


  function moveRight(d){
    document.querySelector('.fullScreen').style.cssText += 'transition: .8s ease'

    setMoreInfo(false)
    document.querySelector('.movie-descr').style.cssText += '-webkit-line-clamp: 3'
    document.querySelector('.movie-descr-cont').style.cssText += 'top:-1000px; transition:none'

    if(matchMedia('(max-width: 573px)').matches){

      let rectAll = document.querySelectorAll('.movie-item'),i;
      let activeDiv = document.querySelector('.movie-item.active')
      const activeIndex = Array.from(rectAll).indexOf(activeDiv)
      
      activeDiv.classList.remove("active");

      if (activeIndex > 0) {
        rectAll[activeIndex - 1].classList.add("active");
        rectAll[activeIndex - 1].style.left = null 
        let bgc = document.querySelector('.movie-item.active').getElementsByTagName('p')[0].innerHTML
        document.querySelector('.fullScreen').style.backgroundImage = 'url('+bgc+')'

        let mTitle = document.querySelector('.movie-item.active').getElementsByTagName('p')[1].innerHTML
        let mDescr = document.querySelector('.movie-item.active').getElementsByTagName('p')[2].innerHTML
        let mGenre = document.querySelector('.movie-item.active').getElementsByTagName('p')[3].innerHTML

        document.querySelector('.movie-title').innerHTML = mTitle
        document.querySelector('.movie-descr').innerHTML = mDescr
        document.querySelector('.movie-genre').innerHTML = mGenre
      }else if(activeIndex == 0){
        rectAll[rectAll.length-1].classList.add('active')
        rectAll[rectAll.length-1].style.left = null 
        let bgc = document.querySelector('.movie-item.active').getElementsByTagName('p')[0].innerHTML
        document.querySelector('.fullScreen').style.backgroundImage = 'url('+bgc+')'

        let mTitle = document.querySelector('.movie-item.active').getElementsByTagName('p')[1].innerHTML
        let mDescr = document.querySelector('.movie-item.active').getElementsByTagName('p')[2].innerHTML
        let mGenre = document.querySelector('.movie-item.active').getElementsByTagName('p')[3].innerHTML
  
        document.querySelector('.movie-title').innerHTML = mTitle
        document.querySelector('.movie-descr').innerHTML = mDescr
        document.querySelector('.movie-genre').innerHTML = mGenre
      }
    }
    else{
    let dd = d
    let moveAmount

    if(typeof(dd) == 'number'){
      moveAmount = 100*dd
    }else if(typeof(dd) == 'object'){
      moveAmount= 100
    }   


    let rectAll = document.querySelectorAll('.movie-item'),i;
    let activeDiv = document.querySelector('.active')
    const activeIndex = Array.from(rectAll).indexOf(activeDiv)

    // console.log(activeIndex);

    if (activeIndex > 0) {
      activeDiv.classList.remove("active");
      rectAll[activeIndex - 1].classList.add("active");
      const currentLeft = parseInt(window.getComputedStyle(document.querySelector('.movie-item')).left, 10);
      // console.log(currentLeft);
  
      let newLeft = currentLeft + moveAmount
  
      for(i=0;i<rectAll.length;i++){
        rectAll[i].style.left = newLeft + 'px'
      }

      let bgc = document.querySelector('.movie-item.active').getElementsByTagName('p')[0].innerHTML
      document.querySelector('.fullScreen').style.backgroundImage = 'url('+bgc+')'

      let mTitle = document.querySelector('.movie-item.active').getElementsByTagName('p')[1].innerHTML
      let mDescr = document.querySelector('.movie-item.active').getElementsByTagName('p')[2].innerHTML
      let mGenre = document.querySelector('.movie-item.active').getElementsByTagName('p')[3].innerHTML

      document.querySelector('.movie-title').innerHTML = mTitle
      document.querySelector('.movie-descr').innerHTML = mDescr
      document.querySelector('.movie-genre').innerHTML = mGenre

    }
    else if(activeIndex == 0){
      for(i=0;i<rectAll.length;i++){
        rectAll[i].classList.remove('active')
        rectAll[i].style.left = -100*(rectAll.length-1)+'px';
      }
      rectAll[rectAll.length-1].classList.add('active')
      let bgc = document.querySelector('.movie-item.active').getElementsByTagName('p')[0].innerHTML
      document.querySelector('.fullScreen').style.backgroundImage = 'url('+bgc+')'

      let mTitle = document.querySelector('.movie-item.active').getElementsByTagName('p')[1].innerHTML
      let mDescr = document.querySelector('.movie-item.active').getElementsByTagName('p')[2].innerHTML
      let mGenre = document.querySelector('.movie-item.active').getElementsByTagName('p')[3].innerHTML

      document.querySelector('.movie-title').innerHTML = mTitle
      document.querySelector('.movie-descr').innerHTML = mDescr
      document.querySelector('.movie-genre').innerHTML = mGenre
    }
  }
  }


 
    window.addEventListener('resize', () => {

        if(/moviemania /.test(document.URL)){
            document.querySelector('.fullScreen').style.cssText += 'transition: unset'

          if(window.innerWidth <= 573){
            document.querySelector('.movie-item.active').style.cssText += 'left: 0px'
          }
          else if(window.innerWidth > 574){
            let rectAll = document.querySelectorAll('.movie-item'),i;
        
            let activeDiv = document.querySelector('.movie-item.active')
            const actInd = Array.from(rectAll).indexOf(activeDiv)
            
            let moveAmount = actInd * -100
            
            // console.log(moveAmount);
      
            let moveAll = document.querySelectorAll('.movie-item'),l;
            for(l=0;l<moveAll.length;l++){
              moveAll[l].style.left = moveAmount + 'px'
            }
          }
        }
    })
  

  
  
  function showMoreLess(){
    // console.log(moreInfo);
    let changeStyle = document.querySelector('.movie-descr')
    
    setMoreInfo(!moreInfo)

    if(moreInfo == false){

      if(matchMedia('(max-width:573px)').matches){
        document.querySelector('.movie-descr-cont').style.cssText += 'top:-421px; transition: .5s ease'
      }else{
        changeStyle.style.cssText += '-webkit-line-clamp: unset'
      }
    }
    else{

      if(matchMedia('(max-width:573px)').matches){
        document.querySelector('.movie-descr-cont').style.cssText += 'top:-1000px; transition: .5s ease'
      }else{
        changeStyle.style.cssText += '-webkit-line-clamp: 3'
      }

    }
  
  }




const navigateTo = useNavigate()


  function showMovie(){
    let selected = document.querySelector('.movie-item.active').querySelector('.m-title').innerHTML;

    // console.log(modifiedVersion); 

    navigateTo(`/moviemania/${selected}`)

  }


  return (
    <> 
      <div className="movie-loader-bg">
        <div className="movie-loader"></div>
        <p style={{color:'white', fontWeight:'100'}}>Loading..</p>
      </div>

      <div className='movie-content'>
        <div className='fullScreen'></div>

        <MovieNavbar />

        <div className="mTogglerContent">
          <a href="#">Home</a>
          <a href="#">Movies</a>
          <a href="#">TV Shows</a>
          <a href="#">Browse by Languages</a>
        </div>

        {/* <hr className='hr1' /> */}
        <div className="movie-buttons">
        <div className='movie-left' onClick={moveRight}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm104 316.9c0 10.2-4.9 19.9-13.2 25.9L457.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178a7.95 7.95 0 0 1 0-12.9l246-178a8 8 0 0 1 12.7 6.5v46.8z"></path></svg></div>
        <div className='movie-right' onClick={moveLeft}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm154.7 454.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z"></path></svg></div>
        </div>

        <div className="movie-details">
          <h2 className="movie-title"></h2>
          <div className="movie-descr-cont">
            <h6 className="movie-descr"></h6>
          </div>
          <p className="movie-genre"></p>
          <div className="movie-play">
            {/* <button onClick={showMoreLess}>{moreInfo ? 'Read Less' : 'Read More'}</button> */}
            <button onClick={showMovie}>More Info</button>
          </div>
        </div>


        <div className="movie-container">
          <div className="half-container">
      
          {AllMovies.map((m, key) => {
            return (
              <div key={key} id={m.id} className={key === 0? 'movie-item active' : 'movie-item'} onClick={displayMovie}>
                <img className='thumbnail' src={m["Poster"]} alt="" />
                <p className='bg-url' style={{display:"none"}}>{m["Images"][0]}</p>
                <p className='m-title'style={{display:"none"}}>{m["Title"]}</p>
                <p className="m-descr" style={{display:"none"}}>{m["Plot"]}</p>
                <p className="m-genre" style={{display:"none"}}>Genre: {m["Genre"]}</p>
              </div>
            )
            })}
                    
            </div>
        </div>
        </div>
      </>
  )
}

export default Movies