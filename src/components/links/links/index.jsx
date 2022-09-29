import "./links.css";
import { useState, useLayoutEffect } from "react";
import { useList } from "../../../context";
import { LinksList, AddLink } from "..";

export const Links = () => {
    const [showDropdown, setShowDropdown] = useState();
    const {listState: { linksList } } = useList();
    const [showAddLink, setShowAddLink] = useState(linksList.length > 0 ? false : true);

    useLayoutEffect(() => {
        localStorage.setItem("links-list", JSON.stringify(linksList));
    },[linksList]);

    return(
        <div className="l-wr">
            <button 
                className="comp-btn"
                onClick={() => setShowDropdown(!showDropdown)}
            >
                <span className="comp-btn-i material-icons-outlined">add_link</span>
                <span>Links</span>
            </button>
            <div className={`l-cn comp-bg ${showDropdown ? "on" : "off"}`}>
            {
                showAddLink ? 
                <AddLink setShowAddLink={setShowAddLink} /> :
                <LinksList setShowAddLink={setShowAddLink} />
            }
            </div>
        </div>
    );
}