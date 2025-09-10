import React from "react";

function Forcast(props){

    const XDay = () => {
        let today = new Date();
        today.setDate(today.getDate() + props?.dayNum);
        return today.toDateString();
    };


    return(
        <div>
            <div><b>{props?.temp}°C</b></div>
            <div>{props?.condition}</div>
            <div>{<XDay/>}</div>
        </div>
    )
}

export default Forcast;