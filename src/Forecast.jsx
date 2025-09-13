import React from "react";

function Forcast(props){

    const XDay = () => {
        let today = new Date();
        today.setDate(today.getDate() + props?.dayNum);
        return today.toDateString();
    };


    return(
        <div className="flex flex-col items-center">
            <div>{props?.condition}</div>
            <img src={props?.icon}></img>
            <div><b>{props?.temp}°C</b></div>
            <div>{<XDay/>}</div>
        </div>
    )
}

export default Forcast;