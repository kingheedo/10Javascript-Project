const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

{
    /* <div class="movie">
            <img
              src="https://image.tmdb.org/t/p/w1280/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg"
              alt="qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg"
            />
            <div class="movie_info">
              <h3>title</h3>
              <span>8.4</span>
            </div>
          </div> */
}

        const formEl = document.querySelector('form')
        const searchInput = document.querySelector('input')
        const mainEl = document.querySelector('main')

getMovies(APIURL);

async function getMovies(url) {
            const response = await fetch(url);
            const responseData = await response.json();
            console.log(responseData)

            showMovies(responseData.results)
        }


        function getClassByRate(rate) {
            if (rate >= 8) {
                return 'green';
            } else if (rate >= 5) {
                return 'orange';
            } else {
                return 'red';
            }
        }

        function showMovies(movies) {
            mainEl.innerHTML = '';
            movies.forEach(movie => {
                const movieEl = document.createElement("div");
                movieEl.className = "movie"
                const imgEl = document.createElement("img");
                imgEl.src = IMGPATH + movie.poster_path

                const movieInfoEl = document.createElement("div");
                movieInfoEl.className = "movie_info";

                const h3El = document.createElement("h3");
                h3El.innerText = movie.title;

                const spanEl = document.createElement("span");
                spanEl.innerText = movie.vote_average;
                spanEl.className = getClassByRate(movie.vote_average)

                const overViewEl = document.createElement("div");
                overViewEl.className='overview'
                overViewEl.innerText = movie.overview

                movieInfoEl.appendChild(h3El);
                movieInfoEl.appendChild(spanEl);
                movieEl.appendChild(imgEl);
                movieEl.appendChild(movieInfoEl);
                movieEl.appendChild(overViewEl);
                mainEl.appendChild(movieEl);
            })

        }

        formEl.addEventListener("submit", (e) => {
            e.preventDefault();

            const searchMovie = searchInput.value
            if(searchMovie){
                getMovies(SEARCHAPI + searchMovie);
                searchInput.value = '';
            }
        })