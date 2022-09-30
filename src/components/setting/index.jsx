import "./settings.css";
import { useState } from "react";
import { SettingsDropdown } from "./settings-dropdown";

export const Settings = () => {
    const [showDropdown, setShowDropdown] = useState();
    
    return(
        <div className="setting-wr">
            <button 
                className="comp-btn"
                onClick={() => setShowDropdown(!showDropdown)}
            >
                <span className="comp-btn-i material-icons-outlined">settings</span>
                <span>Settings</span>
            </button>
            <div className={`settings-dd comp-bg ${showDropdown ? "on" : "off"}`}>
                <SettingsDropdown />
            </div>
        </div>
    );
}