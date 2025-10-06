// API http://www.omdbapi.com/?s=fast%26furious&apikey=f5814458

async function main() {
const searchMovie = await fetch("http://www.omdbapi.com/?s=fast%26furious&apikey=f5814458")
const movieData = await searchMovie.json();
const searchList = document.querySelector('.search-list');
searchList.innerHTML = 
    movieData.Search.map((search) => searchHTML(search)).join("")
}

main();

function showMovies(Title) {
console.log(Title);                                                                                                                                                        1
}

function searchHTML(search) {
    return `<div class="search-card" onclick="showMovies(${search.Title})">
            <div class="search__container">
                <h3>Movie</h3>
                <p><b>${search.Title}</b></p>
                <p><b>Year:</b> ${search.Year}</p>
                <p><b>imdbID:</b> ${search.imdbID}</p>
                <img src="${search.Poster}"/>
            </div>
        </div>`;
}

