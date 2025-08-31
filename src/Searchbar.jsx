import React, {useState} from "react";

function SearchBar(){
    const [geodata, setGeoData] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [city, setCity] = useState("");
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");

    const fetchData = async(event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try{
            var geo_url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
            var weather_url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max&current=temperature_2m`;
            
            const geo_response = await fetch(geo_url);
            const weather_response = await fetch(weather_url);

            if (!geo_response.ok){
                throw new Error(`HTTPS error! status: ${geo_response.status}`);
            }

            if (!weather_response.ok){
                throw new Error(`HTTPs error! status: ${weather_response.status}`);
            }

            const geo_result = await geo_response.json();
            const weather_result = await weather_response.json();

            setGeoData(geo_result);
            setWeatherData(weather_result);
            setLat(geo_result.results[0]["latitude"].toString());
            setLong(geo_result.results[0]["longitude"].toString());

            console.log(geo_result.results[0]["latitude"].toString());
        }
        catch (error){
            setError(error);
        }

        finally{
            setLoading(false);
        }
    }

    return(
    <>
        <section>
            <input className="p-2 border border-black rounded" type="text" placeholder="Enter the name of a city" value={city} onChange={(c) => setCity(c.target.value)}></input>
            <button className="p-2 border border-black rounded hover:bg-gray-200" onClick={fetchData}>Search</button>
        </section>
    </>
    )
}

export default SearchBar;