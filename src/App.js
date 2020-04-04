import React from 'react';
import './App.css';
import SearchBar from './containers/search-bar';
import WeatherList from './containers/weather-list';

function App() {
  return (
    <div className="App container-fluid">
      <SearchBar />
      <br />
      <WeatherList />
    </div>
  );
}

export default App;
