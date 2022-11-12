  // const options = {
  // 	method: 'GET',
  // 	headers: {
  // 		'X-RapidAPI-Key': '3815bdeb8f4e542d67f219491f02f562',
  // 		'X-RapidAPI-Host': 'free-football-soccer-videos1.p.rapidapi.com'
  // 	}
  // };

  // fetch('https://free-football-soccer-videos1.p.rapidapi.com/v1/', options)
  // 	.then(response => response.json())
  // 	.then(response => console.log(response))

  const API_KEY = 'api_key=3815bdeb8f4e542d67f219491f02f562';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
  //const API_URL = BASE_URL + '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc' + API_KEY;

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  //const API_URL = 'https://api.themoviedb.org/3/movie/550?api_key=3815bdeb8f4e542d67f219491f02f562'

  const root  = document.getElementById('root');

getMovies(API_URL);
  
  function getMovies(url) {
    fetch(url).then(resp => resp.json()).then(data => {
      console.log(data.results);
    showMovies(data.results);

    });
  }

  function showMovies(data) {

    root.innerHTML = '';
    data.forEach(movie => {
    const { original_title, poster_path, vote_average, overview, title, backdrop_path } = movie;
    console.log(backdrop_path);
      const movieEl = document.createElement('div')
      movieEl.classList.add('movie');
      
      movieEl.innerHTML = `

      <img src=${ IMG_URL+poster_path} alt="" class='img/>
      <div class=''movie>
        <h1> ${ title }</h1>
        <span> ${ vote_average}</span>
        <p> ${ overview }</p>
      </div>
      
      `
      //console.log(root);
      root.appendChild(movieEl)
    })
  }

  // <div class='overview>
  //       <h1>Overview</h1>
  //         <p> ${ overview}</p>
  //     </div>
  //     <div> ${ title }</div>
  //       <div> ${ vote_average }</div>

  //       <div class='title key=${ title }>
        
  //   </div>