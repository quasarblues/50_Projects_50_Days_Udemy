const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=43f46de612ad1b2c17b4e19735e660b2&page=1';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const MOVIE_PAGE_PATH = 'https://www.themoviedb.org/movie/'

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=43f46de612ad1b2c17b4e19735e660b2&query="';

const form = document.querySelector('#form');
const search = document.querySelector('#search');
const main = document.querySelector('main');

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results);
    console.log(data.results);
}

// Show movies
function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview, id } = movie;

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
        <a href="${MOVIE_PAGE_PATH + id}" target="_blank">
        <img
          src="${getMoviePoster(poster_path)}"
          alt="${title}">
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average.toFixed(1)}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        </a>
      `
        main.append(movieEl);
    })
}

// Vote average color
function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

// Search for a movie
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);

        search.value = ''
    } else {
        window.location.reload();
    }
})

function getMoviePoster(posterURL) {
    if (!posterURL) {
        // Serve generic img if there is no movie poster
        return posterURL = 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    } else {
        return posterURL = IMG_PATH + posterURL;
    }
}

// if poster_path = null serve up a stock image

// https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D