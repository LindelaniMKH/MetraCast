import { useState } from 'react'
import './App.css'
import SearchBar from './Searchbar'
import CurrentInfo from './currentInfo';

function App() {
  const [weatherJSON, setWeatherJSON] = useState("");
  const [geoJSON, setGeoJSON] = useState("");

  return (
    <>
      <SearchBar setWeatherJSON={setWeatherJSON} setGeoJSON={setGeoJSON}></SearchBar>
      <CurrentInfo weatherJSON={weatherJSON} geoJSON={geoJSON}></CurrentInfo>
    </>
  )
}

export default App
