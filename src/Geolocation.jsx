
function Geolocation(props){

    return(
        <>
            <div className="border-2 border-solid rounded-2xl bg-black text-white flex flex-col items-center w-200 ml-50 p-2">
                <h1 className="flex justify-start">Geolocation Info.</h1>
                <p className="flex justify-start">Country: {props?.country}</p>
                <p className="flex justify-start">Latitude: {props?.latitude}°</p>
                <p className="flex justify-start">Longitude: {props?.longitude}°</p>
                <p className="flex justify-start">Timezone: {props?.timezone}</p>
            </div>
        </>
    )
}

export default Geolocation;