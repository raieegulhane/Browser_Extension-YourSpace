import "./home.css";
import { DateTime, TodaysFocus, Quotes, Weather } from "../../components";
import YourSpaceLogo from "../../assets/yourspace-logo2.svg"

export const Home = () => {
    return(
        <main className="home-wr fx-c fx-js-c fx-al-c">
            <img 
                className="home-logo"
                src={YourSpaceLogo} 
                alt="yourspace-logo" 
            />
            <Weather />
            <DateTime />
            <TodaysFocus />
            <Quotes />
        </main>
    );
}