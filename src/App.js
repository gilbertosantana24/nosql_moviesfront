import { useState, useEffect } from 'react';
import DataMovies from './components/DataMovies';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  
  const moviesApi = 'https://nosqlbackend.herokuapp.com';

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
    <div className="App">
    <h1>hola</h1>
    <Routes>
          <Route path="/api/movies" element={<DataMovies />} />

    </Routes>
    </div>
  );
}

export default App;
