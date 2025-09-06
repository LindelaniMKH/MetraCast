import React from "react";

function Forcast(props){

    return(
        <div>
            <div>{props?.temp}°C</div>
            <div>{props?.condition}</div>
            <div>Date</div>
        </div>
    )
}

export default Forcast;