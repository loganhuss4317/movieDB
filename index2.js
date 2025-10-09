// API
const apiKey = 'f5814458';
const apiURL = 'https://www.omdbapi.com/';
const url = 
// HTML references
const form = document.getElementById('movieSearchForm');
const resultsContainer = document.getElementById('results');

// event listener
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Stop the default form submission and page reload

    const movieTitle = document.getElementById('movieTitle').value.trim();

    if (movieTitle) {
        resultsContainer.innerHTML = 'Searching...'; // Show a loading message
        await searchMovie(movieTitle);
    } else {
        resultsContainer.innerHTML = '<p class="error">Please enter a movie title.</p>';
    }
});

/**
 * Function to call the OMDb API and search for the movie.
 * @param {string} title - The title of the movie to search for.
 */
async function searchMovie(title) {
    // Construct the API endpoint URL
    const url = `${apiURL}?apikey=${apiKey}&t=${encodeURIComponent(title)}&plot=full`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === 'True') {
            displayMovie(data);
        } else {
            // Handle cases where the movie is not found or API fails
            resultsContainer.innerHTML = `<p class="error">Error: ${data.Error || 'Movie not found.'}</p>`;
        }
    } catch (error) {
        console.error('Fetch error:', error);
        resultsContainer.innerHTML = '<p class="error">An error occurred while fetching the data.</p>';
    }
}

/**
 * Function to display the movie details on the page.
 * @param {object} movie - The movie data object from the OMDb API.
 */
function displayMovie(movie) {
    // Clear previous results
    resultsContainer.innerHTML = '';

    // Create the HTML structure for the movie card
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';

    movieCard.innerHTML = `
        <h3>${movie.Title}</h3>
        <p><strong>Director:</strong> ${movie.Year}</p>
        <p><strong>IMDb Rating:</strong> ${movie.imdbID}</p>
        <img src="${search.Poster}"/>
    `;

    // Append the card to the results container
    resultsContainer.appendChild(movieCard);
}