import { useEffect, useState, useReducer } from "react";
import { useList } from "../../../context";
import { initialListValues, listReducerFunction } from "../../../reducers";
import { LinksList, AddLink } from "..";
import "./links.css";

export const Links = () => {
    const [showDropdown, setShowDropdown] = useState();
    const {listState: { linksList }, setListState} = useList();
    const [showAddLink, setShowAddLink] = useState(linksList.length > 0 ? false : true);

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
                <AddLink 
                    onClickBackBtn={() => setShowAddLink(false)}
                /> :
                <LinksList 
                    onClick={() => setShowAddLink(true)}
                />
            }
            </div>
        </div>
    );
}