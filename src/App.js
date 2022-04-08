import { useState, useEffect } from 'react';
import DataMovies from './components/DataMovies';
import Navbar from './components/Navbar';
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
    <Navbar />
    <Routes>
          <Route path="/movieCatalog" element={<DataMovies />} />

    </Routes>
    </div>
  );
}

export default App;
