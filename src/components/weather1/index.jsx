import "./weather1.css";
import { useState, useEffect } from "react";
import axios from "axios";

export const Weather1 = () => {
    const [lat, setLat] = useState("0");
    const [long, setLong] = useState("0");
    const [error, setError] = useState("");
    const cityName = "kolkata";
    const [data, setData] = useState({
        city: "",
        degrees: 0,
    });
    const { city, degrees } = data;

  const getWeatherApi = (lat, long) => {
    if (lat === "0" || long === "0") {
      return(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`);
    } else {
      return(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`);
    }
  };

    useEffect(() => {
        (() => {
            navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
        })();

        (async () => {
            const req = getWeatherApi(lat, long);
            try {
                const res = await axios(req);
                setData({
                    city: res.data.name,
                    degrees: Math.round(res.data.main.temp),
                    weatherIcon: res.data.weather[0].icon
                });
                setError("");
            } catch (error) {
                setError("City not found");
            }
        })();
    }, [lat, long, getWeatherApi]);

    return(
        <div className="weather-wr">
        {
            error === "" ?
            <div className="weather-cn">
                <div className="weather-display">
                    {city} {degrees}°
                </div>
            </div> :
            <p className="fx-r fx-al-c">
                <span className="material-icons-outlined">error</span> {error}
            </p>
        }
        </div>
    );
}
