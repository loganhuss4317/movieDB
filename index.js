// API
const apiKey = 'f5814458';
const apiURL = 'https://www.omdbapi.com/';

// HTML references
const form = document.getElementById('movieSearchForm');
const resultsContainer = document.getElementById('results');

// Event listener for the form submit
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Stop the default form submission

    const movieTitle = document.getElementById('movieTitle').value.trim();

    if (movieTitle) {
        resultsContainer.innerHTML = 'Searching...'; // Show loading message
        await searchMovie(movieTitle);
    } else {
        resultsContainer.innerHTML = '<p class="error">Please enter a movie title.</p>';
    }
});

/**
 * Function to call the OMDb API and search for movies.
 * @param {string} title - The title of the movie to search for
 */
async function searchMovie(title) {
    // Use 's' parameter to search multiple movies
    const url = `${apiURL}?apikey=${apiKey}&s=${encodeURIComponent(title)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === 'True') {
            displayMovies(data);
        } else {
            resultsContainer.innerHTML = `<p class="error">Error: ${data.Error || 'Movie not found.'}</p>`;
        }
    } catch (error) {
        console.error('Fetch error:', error);
        resultsContainer.innerHTML = '<p class="error">An error occurred while fetching the data.</p>';
    }
}

/**
 * Function to display the search results on the page
 * @param {object} data - The data object from the OMDb API containing multiple movies.
 */
function displayMovies(data) {
    resultsContainer.innerHTML = ''; // Clear previous results

    data.Search.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <h3>${movie.Title} (${movie.Year})</h3>
            <h3>IMDB ID: ${movie.imdbID}</h3>
            <img src="${movie.Poster}"/>
        `;
        resultsContainer.appendChild(movieCard);
    });
}
