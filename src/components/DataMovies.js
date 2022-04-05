import React, { useEffect, useState } from 'react'

function DataMovies() {
    const moviesApi = 'https://nosqlbackend.herokuapp.com/api/movies';

    var [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();
    }, [movies]);

    const getMovies = async () => {
        fetch(moviesApi)
            .then(response => response.json())
            .then(data => {
                setMovies(data);
            })
    }

    return (
        <div className='movies'>
            <h1>Movie Catalog</h1>
            <div className='movie-grid'>
            {movies
                    .sort((a, b) => {
                        return b.id - a.id;
                    })
                    .map(movie => {
                        return (
                            <div key={movie.id}>
                                <h3>{movie.name}</h3>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default DataMovies