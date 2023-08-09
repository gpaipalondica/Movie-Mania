import React, { useEffect } from 'react'
import { useState } from 'react'
import '../styles/Movies.css'

const MovieList = [
  {
    id:1,
    thumbnail: 'https://i5.walmartimages.com/asr/65e23347-2ccc-4581-9700-581e0ea9c3a8.a808f8889bfa9e368659fbefc5e5dda4.jpeg',
    bgUrl: 'https://www.hollywoodreporter.com/wp-content/uploads/2015/02/avengers_age_of_ultron_poster_detail.jpg?w=1024',
    title: 'Avengers: End Game',
    descr: 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers - Thor, Black Widow, Captain America and Bruce Banner - must figure out a way to bring back their vanquished allies for an epic showdown with Thanos - the evil demigod who decimated the planet and the universe.',
    genre:'Action, Adventure, SciFi',
  },
  {
    id:2,
    thumbnail: 'https://i.redd.it/hx5uosxtj6l81.jpg',
    bgUrl: 'https://w0.peakpx.com/wallpaper/307/244/HD-wallpaper-the-batman-movie-poster-art-the-batman-batman-superheroes-movies-2022-movies.jpg',
    title: 'Batman: Dark Knight Rises',
    descr: 'With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.',
    genre:'Action, Superhero',
  },
  {
    id:3,
    thumbnail: 'https://www.themoviedb.org/t/p/original/vJ4r8imQ9piseO9ufCwsopBBWnZ.jpg',
    bgUrl: 'https://www.hollywoodreporter.com/wp-content/uploads/2023/05/rev-1-Txtd_Barbie_First_Look_BARBIE_High_Res_JPEG-X-H-2023.jpg?w=1296',
    title: 'Barbie',
    descr: 'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
    genre:'Rom-Com',
  },
  {
    id:4,
    thumbnail: 'https://w0.peakpx.com/wallpaper/429/197/HD-wallpaper-brahmastra-part-one-shiva-brahmastra-2022-fan-brahmastra-part-one-shiva-77764-brahm%C4%81stra.jpg',
    bgUrl: 'https://i.ytimg.com/vi/bweRG6WueuM/maxresdefault.jpg',
    title: 'Brahmastra',
    descr: 'A young man on the brink of falling in love gets his world turned upside down when he discovers he has the power to control fire and a connection to a secret society of guardians.',
    genre:'Fiction, Sci-Fi',
  },
  {
    id:5,
    thumbnail: 'https://static.displate.com/280x392/displate/2022-11-02/26944ab7f7627767d8c7279a4333326d_398da8e25789421e929efc74bf8503fb.jpg',
    bgUrl:'https://wallpaperaccess.com/full/817100.jpg',
    title: "Harry Potter and the Order of the Phoenix",
    descr: "It follows Harry Potter's struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic.",
    genre:"Fantasy",
  },
  {
    id:6,
    thumbnail: 'https://stat4.bollywoodhungama.in/wp-content/uploads/2023/07/Bawaal.jpg',
    bgUrl:'https://www.filmibeat.com/ph-big/2023/07/bawaal_168993684300.jpg',
    title: "Bawaal",
    descr: 'A small-town man who falls in love with the most beautiful girl in town. He wants to marry her one day because marrying her can raise his social position.',
    genre:"Romance, History"
  },
  {
    id:7,
    thumbnail: 'https://m.media-amazon.com/images/M/MV5BOTJmNjE0OWYtN2U0NC00YmIzLWE0YWItNGE2MzkyYmI1YjFkXkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_FMjpg_UX1000_.jpg',
    bgUrl:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/8f7ad3909f7e5c24f6f9a01cf1b3bafe5ebc16e6ce6d80e25e033bd917f3a024._RI_TTW_.jpg',
    title: "Singham",
    descr: 'A brave and honest policeman patiently settles every dispute in his town with his words of wisdom and resorts only to using force when necessary.',
    genre:"Action, Comedy"
  },

]

function Movies() {

  useEffect(()=>{
    setTimeout(() => {
      document.querySelector('.movie-loader-bg').style.opacity='0'
    }, 2000)
    setTimeout(() => {
      document.querySelector('.movie-loader-bg').style.display='none'
    }, 2100)
    
  },[])

  const [mToggler, setMToggler] = useState(false)
  const [moreInfo, setMoreInfo] = useState(false)

  function movieToggler(){
    if(mToggler == true){
      setMToggler(!mToggler)
      document.querySelector('.mTogglerContent').style.right = '-600px'
    }
    else if(mToggler == false){
      setMToggler(!mToggler)
      document.querySelector('.mTogglerContent').style.right = '0px'
    }
  }


  useEffect(() => {

    // console.log(MovieList);
    document.querySelector(".fullScreen").style.backgroundImage = 'url('+MovieList[0].bgUrl+')'
    document.querySelector('.movie-title').innerHTML = MovieList[0].title
    document.querySelector('.movie-descr').innerHTML = MovieList[0].descr
    document.querySelector('.movie-genre').innerHTML = 'Genre: '+MovieList[0].genre
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

        if(/moviemania/.test(document.URL)){


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


  return (
    <> 
      <div className="movie-loader-bg">
        <div className="movie-loader"></div>
        <p style={{color:'white', fontWeight:'100'}}>Loading..</p>
      </div>

      <div className='movie-content'>
        <div className='fullScreen'></div>

        <div className="movie-navbar">
          <div className="movie-nav-contents">
            <a>MovieMania</a>
            <a href="#">Home</a>
            <a href="#">Movies</a>
            <a href="#">TV Shows</a>
            <a href="#">Browse by Languages</a>
          </div>
          <div className="movie-nav-account">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
            <div className="movie-user">
              <p>Hello, <span>NewUser</span></p>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M12,8c-1.178,0-2,0.822-2,2s0.822,2,2,2s2-0.822,2-2S13.178,8,12,8z"></path><path fill="none" d="M12,4c-4.337,0-8,3.663-8,8c0,2.176,0.923,4.182,2.39,5.641c0.757-1.8,2.538-3.068,4.61-3.068h2 c2.072,0,3.854,1.269,4.61,3.068C19.077,16.182,20,14.176,20,12C20,7.663,16.337,4,12,4z M12,14c-2.28,0-4-1.72-4-4s1.72-4,4-4 s4,1.72,4,4S14.28,14,12,14z"></path><path fill="none" d="M13,16.572h-2c-1.432,0-2.629,1.01-2.926,2.354C9.242,19.604,10.584,20,12,20s2.758-0.396,3.926-1.073 C15.629,17.582,14.432,16.572,13,16.572z"></path><path d="M12,2C6.579,2,2,6.579,2,12c0,3.189,1.592,6.078,4,7.924V20h0.102C7.77,21.245,9.813,22,12,22s4.23-0.755,5.898-2H18 v-0.076c2.408-1.846,4-4.734,4-7.924C22,6.579,17.421,2,12,2z M8.074,18.927c0.297-1.345,1.494-2.354,2.926-2.354h2 c1.432,0,2.629,1.01,2.926,2.354C14.758,19.604,13.416,20,12,20S9.242,19.604,8.074,18.927z M17.61,17.641 c-0.757-1.8-2.538-3.068-4.61-3.068h-2c-2.072,0-3.854,1.269-4.61,3.068C4.923,16.182,4,14.176,4,12c0-4.337,3.663-8,8-8 s8,3.663,8,8C20,14.176,19.077,16.182,17.61,17.641z"></path><path d="M12,6c-2.28,0-4,1.72-4,4s1.72,4,4,4s4-1.72,4-4S14.28,6,12,6z M12,12c-1.178,0-2-0.822-2-2s0.822-2,2-2s2,0.822,2,2 S13.178,12,12,12z"></path></svg>
            </div>
            <div className='movie-toggler' onClick={movieToggler}>
            <i className={mToggler ? 'fas fa-times' : 'fas fa-bars'} style={{color:'#fff'}} />
            </div>
          </div>
        </div>

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
            <button>Watch Now</button>
            <button onClick={showMoreLess}>{moreInfo ? 'Less Info' : 'More Info'}</button>
          </div>
        </div>


        <div className="movie-container">
        <div className="half-container">
          
        {MovieList.map((m, key) => {
          return (
            <div key={key} id={m.id} className={key === 0? 'movie-item active' : 'movie-item'} onClick={displayMovie}>
              <img className='thumbnail' src={m.thumbnail} alt="" />
              <p className='bg-url' style={{display:"none"}}>{m.bgUrl}</p>
              <p className='m-title'style={{display:"none"}}>{m.title}</p>
              <p className="m-descr" style={{display:"none"}}>{m.descr}</p>
              <p className="m-genre" style={{display:"none"}}>Genre: {m.genre}</p>
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