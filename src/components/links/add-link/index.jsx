import "./add-link.css"
import { useState } from "react";
import { useList } from "../../../context";


export const AddLink = ({ onClickBackBtn }) => {
    const [newLink, setNewLink] = useState({ linkNameNew: "", linkNew: "https://" });
    const { linkNameNew, linkNew } = newLink;
    const { listDispatch } = useList(); 

    return(
        <div className="add-link-wr fx-c">
            <button 
                className="link-back-btn btn-icon"
                onClick={onClickBackBtn}
            >
                <span className="back-icon material-icons-outlined">arrow_back</span>
            </button>
            <div className="al-inp-wr fx-c">
                <label 
                    className="al-label"
                    htmlFor="link-name"
                >
                    Name
                    <input 
                        id="link-name"
                        className="dd-inp"
                        name="link-name"
                        type="text"
                        autoComplete="false"
                        value={linkNameNew}
                        onChange={(e) => setNewLink({ ...newLink, linkNameNew: e.target.value })}
                    />
                </label>
                <label 
                    className="al-label"
                    htmlFor="link"
                >
                    Link
                    <input 
                        id="link"
                        className="dd-inp"
                        name="link"
                        type="text"
                        placeholder="example.com"
                        autoComplete="false"
                        value={linkNew}
                        onChange={(e) => setNewLink({ ...newLink, linkNew: e.target.value })}
                    />
                    <span className="txt-sm txt-gray">Link must have https://</span>
                </label>
            </div>
            <button 
                className="btn btn-outline btn-wt-i btn-cr al-btn"
                onClick={() => listDispatch({ type: "ADD_LINK", payload: { linkName: linkNameNew, link: linkNew }})}
            >
                <span className="txt-sm">Add</span>
                <span className="al-btn-i material-icons-outlined">add</span>
            </button>
        </div>
    );
}