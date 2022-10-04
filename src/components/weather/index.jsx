import axios from "axios";
import { useEffect, useState } from "react";
import "./weather.css";

export const Weather = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const APIkey = process.env.REACT_APP_API_KEY;
    const [coordinates, setCoordinates] = useState({ lat: "", lon: "" });
    const { lat, lon } = coordinates;
    const [weatherDetails, setWeatherDetails] = useState({
        icon: "",
        city: "",
        temp: "",
        minTemp: "",
        maxTemp: "",
        humidity: "",
        description: "",
    });
    const {
        icon,
        city,
        temp,
        minTemp,
        maxTemp,
        description
    } = weatherDetails;

    const getAPIurl = () => {
        if (lat && lon) {
            return(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`);
        } else {
            return(`https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=${APIkey}`)
        }
    }

    const getWeatherDetails = async () => {
        try {
            const { data } = await axios.get(getAPIurl());
            setWeatherDetails({
                icon: data.weather[0].icon,
                city: data.name,
                temp: Math.floor(Number(data.main.temp) - 273.15),
                minTemp: Math.floor(Number(data.main.temp_min) - 273.15),
                maxTemp: Math.floor(Number(data.main.temp_max) - 273.15),
                description: data.weather[0].description
            });
            console.log(description);
        } catch (error) {
            console.log("ERROR__GET_WEATHER: ", error);
        }
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCoordinates({
                lat: position.coords.latitude,
                lon: position.coords.longitude
            });
        });

        getWeatherDetails();
    }, [lat, lon]);

    return(
        <div className="weather-wr">
            <div 
                className="fx-r fx-al-c"
                onMouseOver={() => setShowDropdown(true)}
                onMouseOut={() => setShowDropdown(false)}
            >
                <img 
                    src={`http://openweathermap.org/img/wn/${icon}.png`}
                    alt="weather-icon"
                />
                <div className="fx-c fx-al-c">
                    <p><span className="temp">{temp}</span><sup>&#0176;C</sup></p>
                    <p className="txt-sm">{city}</p>
                </div>
            </div>
            {
                showDropdown &&
                <div className={`weather-dd comp-bg ${showDropdown ? "on" : "off"}`}>
                    <div className="fx-r fx-al-c fx-js-sb">
                        <div>
                            <p className="txt-bold city">{city}</p>
                            <p className="txt-gray">{description}</p>
                        </div>
                        <img 
                            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                            alt="weather-icon"
                        />
                    </div>
                    <div className="fx-r fx-al-c">
                        <p className="fx-r">
                            <span className="dd-temp">{temp}</span>
                            <span className="dd-temp-sup">&#0176;C</span>
                        </p>
                        <div className="fx-c dd-range">
                            <p className="fx-r txt-gray">min {minTemp}&#0176;<span className="dd-c">C</span></p>
                            <p className="fx-r txt-gray">max {maxTemp}&#0176;<span className="dd-c">C</span></p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}