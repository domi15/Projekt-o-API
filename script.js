async function fetchMovieDetails() {
    const apiKey = 'a5b78ae7'; // Replace with your OMDb API key
    const title = document.getElementById('movieTitle').value;
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`;

    try {
        const response = await fetch(url);
        const movieData = await response.json();

        if (movieData.Response === 'True') {
            displayMovieDetails(movieData);
        } else {
            document.getElementById('movieDetails').innerHTML = '<p>Movie not found.</p>';
        }
    } catch (error) {
        console.error('Error fetching movie details:', error);
        document.getElementById('movieDetails').innerHTML = '<p>Error fetching movie details. Please try again later.</p>';
    }
}

function displayMovieDetails(movieData) {
    const movieDetailsDiv = document.getElementById('movieDetails');
    movieDetailsDiv.innerHTML = `
        <h2>${movieData.Title}</h2>
        <p><strong>Year:</strong> ${movieData.Year}</p>
        <p><strong>Genre:</strong> ${movieData.Genre}</p>
        <p><strong>Director:</strong> ${movieData.Director}</p>
        <p><strong>Plot:</strong> ${movieData.Plot}</p>
    `;
}
