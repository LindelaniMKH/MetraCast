import React, {useState} from "react";

function SearchBar(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [city, setCity] = useState("");

    const fetchData = async(event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try{
            var url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
            const response = await fetch(url);

            if (!response.ok){
                throw new Error(`HTTPS error! status: ${response.status}`);
            }

            const result = await response.json();

            setData(result);

            console.log(result.results[0]);
        }
        catch (error){
            setError(error);
        }

        finally{
            setLoading(false);
        }
    };
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