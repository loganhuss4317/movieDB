// API http://www.omdbapi.com/?s=fast&apikey=f5814458 with s=fast parameter

async function getMovieData() {
const getData = await fetch("https://www.omdbapi.com/?s=fast&apikey=f5814458")
const movieData = await getData.json();
const searchList = document.querySelector('.search-list');
searchList.innerHTML = 
    movieData.Search.map((search) => searchHTML(search)).join("")
}

getMovieData();  

function showMovieTitle(search) {
    console.log(search);
}

showMovieTitle()

function searchHTML(search) {
    return `<div class="search-card" onclick="showMovies(${search.id})">
            <div class="search__container">
                <p><b>${search.Title}</b></p>
                <p><b>Year:</b> ${search.Year}</p>
                <p><b>imdbID:</b> ${search.imdbID}</p>
                <img src="${search.Poster}"/>
            </div>
        </div>`;
}