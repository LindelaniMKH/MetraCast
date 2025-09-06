import React, { useState } from "react";
import Forcast from "./Forecast";

function CurrentInfo({weatherJSON, geoJSON}){
    const Conditions = [];
    const date = new Date();
    const Day = date.getDate();
    const MonthIndex = date.getMonth();
    const Year = date.getFullYear();
    const MonthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
     const MonthName = MonthNames[MonthIndex];

    if (!weatherJSON || !geoJSON){
        return null;
    }


    const weatherCode = (weatherJSON.daily["weather_code"]);
    const mean_temp = (weatherJSON.daily["temperature_2m_mean"]);

    var curr_WeatherCode = weatherCode[0];

    for (let i=0; i < 6; i++){
        if (weatherCode[i] === 0){
            Conditions.push("Clear Sky");
        }
         else if (weatherCode[i] <= 3 && weatherCode[i] >= 1){
            Conditions.push("Partly Cloud");
         }
         else if (weatherCode[i] === 48 || weatherCode[i] === 45){
            Conditions.push("Fog");
         }
         else if (weatherCode[i] <= 55 && weatherCode[i] >= 51){
            Conditions.push("Drizzle");
         }
         else if (weatherCode[i] === 57 || weatherCode[i] === 56){
            Conditions.push("Freezing Drizzle");
         }
         else if (weatherCode[i] <= 65 && weatherCode[i] >= 61){
            Conditions.push("Slight Rain");
         }
         else if (weatherCode[i] === 67 || weatherCode[i] === 66){
            Conditions.push("Freezing Rain");
         }
         else if (weatherCode[i] <= 75 && weatherCode[i] >= 71){
            Conditions.push("Snow Fall");
         }
         else if (weatherCode[i] === 77){
            Conditions.push("Snow Grains");
         }
         else if (weatherCode[i] <= 82 || weatherCode[i] >= 80){
            Conditions.push("Rain Showers");
         }
         else if (weatherCode[i] === 86 || weatherCode[i] === 85){
            Conditions.push("Snow Showers");
         }
         else if (weatherCode[i] === 95){
            Conditions.push("Thunderstorm");
         }
         else if(weatherCode[i] === 99 || weatherCode[i] === 96)
            Conditions.push("Thunderstorm with hail");
    }

    console.log(weatherCode);
    console.log(Conditions[1]);
    return(
        <>
            <section>
                <p className=" pt-3 font-mono"><b>{geoJSON.results[0]["country"]}, {geoJSON.results[0]["name"]}</b></p>
                <p>{Conditions[0]}</p>
                <h1 className="text-7xl pt-4 font-mono">{weatherJSON.current["temperature_2m"].toString()}°C</h1>
                <p></p>
                <p>{Day} {MonthName}, {Year}</p>
            </section>
            <section>
               <Forcast condition={Conditions[1]} temp={mean_temp[1]}></Forcast>
            </section>
        </>
    )
}

export default CurrentInfo;