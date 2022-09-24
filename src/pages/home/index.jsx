import "./home.css";
import { DateTime, TodaysFocus } from "../../components";
import YourSpaceLogo from "../../assets/yourspace-logo2.svg"

export const Home = () => {
    return(
        <main className="home-wr fx-c fx-js-c fx-al-c">
            <img 
                className="home-logo"
                src={YourSpaceLogo} 
                alt="yourspace-logo" 
            />
            <DateTime />
            <TodaysFocus />
        </main>
    );
}