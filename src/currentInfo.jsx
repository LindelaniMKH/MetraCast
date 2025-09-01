import React from "react";


function CurrentInfo({weatherJSON, geoJSON}){
    if (!weatherJSON){
        return(
            <h1></h1>
        )
    }

    return(
        <>
            <h1>{weatherJSON.current["temperature_2m"].toString()}°C</h1>
        </>
    )
}

export default CurrentInfo;