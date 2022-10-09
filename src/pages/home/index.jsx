import "./home.css";
import { 
    DateTime, 
    TodaysFocus, 
    Quotes, 
    Weather, 
    GoogleSearch, 
    Links, 
    Events,
    Todo, 
    Settings 
} from "../../components";
import YourSpaceLogo from "../../assets/yourspace-logo2.svg"
import { useSetting } from "../../context";

export const Home = () => {
    const { settingState: { focusMode } } = useSetting();

    return(
        <div className="home-wr">
            <header className="fx-r fx-js-sb fx-al-c home-header">
                <div className="fx-r fx-al-c">
                    <img 
                        className="home-logo"
                        src={YourSpaceLogo} 
                        alt="yourspace-logo" 
                    />
                    <p className={`txt-bold focus-mode-on ${focusMode ? "focus-off" : "focus-on"}`}>
                        FOCUS MODE: ON
                    </p>
                    {
                        <div className={`fx-r gap-1 ${focusMode ? "focus-on" : "focus-off"}`}>
                            <GoogleSearch />
                            <Links />
                        </div>
                    }
                </div>
                <div className={`fx-r fx-al-c gap-3 ${focusMode ? "focus-on" : "focus-off"}`}>
                    <Events />
                    <Weather />
                </div>
            </header>
            <main className="home-main fx-c fx-js-c fx-al-c">
                <DateTime />
                <TodaysFocus />
            </main>
            <footer className="home-footer fx-r fx-js-sb fx-al-c">
                <Settings />
                <div className={`fx-r gap-1 ${focusMode ? "focus-on" : "focus-off"}`}>
                    <Quotes />
                </div>
                <div className={`fx-r gap-1 ${focusMode ? "focus-on" : "focus-off"}`}>
                    <Todo />
                </div>
            </footer>
        </div>
    );
}