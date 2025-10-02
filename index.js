// API http://www.omdbapi.com/?s=fast%26furious&apikey=f5814458

async function main() {
const searchMovie = await fetch("http://www.omdbapi.com/?s=fast%26furious&apikey=f5814458")
const movieData = await searchMovie.json();
console.log(
movieData.map(
    (movie) => `<div class="search-card">
        <div class="search__container">
            <h3>Movie</h3>
            <p><b>Title</b> Title</p>
            <p><b>Year</b> Year</p>
            <p><b>imdbID</b> imdbID</p>
            <p><b>Poster</b> Poster</p>
        </div>
</div>`)
);
}

main();