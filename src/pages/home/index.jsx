import "./home.css";
import { DateTime, TodaysFocus, Quotes, Weather, GoogleSearch, Links } from "../../components";
import YourSpaceLogo from "../../assets/yourspace-logo2.svg"

export const Home = () => {
    return(
        <main className="home-wr fx-c fx-js-c fx-al-c">
            <div className="nav fx-r">
                <img 
                    className="home-logo"
                    src={YourSpaceLogo} 
                    alt="yourspace-logo" 
                />
                <div className="fx-r gap-1">
                    <GoogleSearch />
                    <Links />
                </div>
            </div>
            {/* <Weather /> */}
            <DateTime />
            <TodaysFocus />
            <Quotes />
        </main>
    );
}