import React, { useState } from "react";
import Forcast from "./Forecast";
import ClearDay from "./assets/Weather Icons/Clear Day.svg";
import Cloudy from "./assets/Weather Icons/Cloudy.svg";
import Fog from "./assets/Weather Icons/Fog.svg";
import HailStorm from "./assets/Weather Icons/HailStorm.svg";
import HeavyRain from "./assets/Weather Icons/Heavy Rain.svg";
import HeavySnow from "./assets/Weather Icons/Heavy Snow.svg";
import Rainy from "./assets/Weather Icons/Rainy.svg";
import Snowy from "./assets/Weather Icons/Snowy.svg";
import ThunderStorm from "./assets/Weather Icons/ThunderStorm.svg";

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


    const weatherCode = (weatherJSON?.daily["weather_code"]) || [];
    const mean_temp = (weatherJSON?.daily["temperature_2m_mean"]) || [];

    let dayNum;

    const weatherDescription = {
      0: ["Clear Sky", ClearDay],
      1: ["Partly Cloud", Cloudy],
      2: ["Partly Cloud", Cloudy],
      3: ["Partly Cloud", Cloudy],
      45: ["Fog", Fog],
      48: ["Fog", Fog],
      51: ["Drizzle", Rainy],
      53: ["Drizzle", Rainy],
      55: ["Drizzle", Rainy],
      56: ["Freezing Drizzle", Rainy],
      57: ["Freezing Drizzle", Rainy],
      61: ["Slight Rain", Rainy],
      63: ["Slight Rain", Rainy],
      65: ["Slight Rain", Rainy],
      66: ["Freezing Rain", Rainy],
      67: ["Freezing Rain", Rainy],
      71: ["Snow Fall", Snowy],
      73: ["Snow Fall", Snowy],
      75: ["Snow Fall", Snowy],
      77: ["Snow Grains", Snowy],
      80: ["Rain Showers", HeavyRain],
      81: ["Rain Showers", HeavyRain],
      82: ["Rain Showers", HeavyRain],
      85: ["Rain Showers", HeavyRain],
      86: ["Snow Showers", HeavySnow],
      95: ["ThunderStorm", ThunderStorm],
      96: ["ThunderStorm with Hail", HailStorm],
      99: ["ThunderStorm with Hail", HailStorm]
    };

    const weatherConditions = weatherCode.map(code => weatherDescription[code][0] || "Unknown");
    const weatherIcon = weatherCode.map(code => weatherDescription[code][1] || "Unknown");
;
    console.log(weatherConditions);
    console.log(weatherIcon[0]);

    return(
        <>
            <section className="flex flex-col items-center">
                <p className=" pt-3 font-mono m-1"><b>{geoJSON?.results[0]["country"]}, {geoJSON?.results[0]["name"]}</b></p>
                <p>{weatherConditions[0]}</p>
                <img className="w-20 m-1" src={weatherIcon[0]}></img>
                <h1 className="text-7xl pt-4 font-mono m-1">{weatherJSON?.current["temperature_2m"].toString()}°C</h1>
                <p></p>
                <p>{Day} {MonthName}, {Year}</p>
            </section>
            <div className="py-8 flex flex-row space-x-12 justify-center items-center">
               <div>
                  <Forcast condition={weatherConditions[1]} temp={mean_temp[1]} dayNum={1} icon={weatherIcon[1]}></Forcast>
               </div>

               <div>
                  <Forcast condition={weatherConditions[2]} temp={mean_temp[2]} dayNum={2} icon={weatherIcon[2]}></Forcast>
               </div>

               <div>
                  <Forcast condition={weatherConditions[3]} temp={mean_temp[3]} dayNum={3} icon={weatherIcon[3]}></Forcast>
               </div>

               <div>
                  <Forcast condition={weatherConditions[4]} temp={mean_temp[4]} dayNum={4} icon={weatherIcon[4]}></Forcast>
               </div>

               <div>
                  <Forcast condition={weatherConditions[5]} temp={mean_temp[5]} dayNum={5} icon={weatherIcon[5]}></Forcast>
               </div>
            </div>
        </>
    )
}

export default CurrentInfo;