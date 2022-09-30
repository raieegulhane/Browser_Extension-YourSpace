import "./home.css";
import { DateTime, TodaysFocus, Quotes, Weather, GoogleSearch, Links, Todo } from "../../components";
import YourSpaceLogo from "../../assets/yourspace-logo2.svg"

export const Home = () => {
    return(
        <div className="home-wr fx-c fx-js-c fx-al-c">
            <header className="fx-r fx-js-sb fx-al-c home-header">
                <div className="fx-r fx-al-c">
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
                <div className="fx-r fx-al-c gap-3">
                    {/* <Weather /> */}
                </div>
            </header>
            <DateTime />
            <TodaysFocus />
            <footer className="home-footer fx-r fx-js-sb">
                <Todo />
                <Quotes />
                <Todo />
            </footer>
        </div>
    );
}