import "./add-link.css"
import { useState } from "react";
import { useList } from "../../../context";

export const AddLink = ({ setShowAddLink }) => {
    const [newLink, setNewLink] = useState({ linkNameNew: "", linkNew: "" });
    const { linkNameNew, linkNew } = newLink;
    const [warning, setWarning] = useState(false);
    const { listState: { linksList },  listDispatch } = useList(); 

    const addLinkHandler = (e) => {
        e.preventDefault();
        if (!linkNameNew || !linkNew ) {
            return setWarning(true);
        }
        listDispatch({ type: "ADD_LINK", payload: { linkName: linkNameNew, link: linkNew }})
        setShowAddLink(false);
    }

    return(
        <div className="al-wr fx-c gap-1">
            <div className="fx-r fx-al-c fx-js-sb">
            {
                linksList.length > 0 &&
                <button 
                    className="link-back-btn btn-icon"
                    onClick={() => setShowAddLink(false)}
                >
                    <span className="back-icon material-icons-outlined">arrow_back</span>
                </button>
            }
            {
                warning &&
                <p className="fx-r fx-al-c txt-red gap-2">
                    <span className="warn-i material-icons">error_outline</span>
                    <span className="txt-sm txt-bold">Empty fields</span>
                </p>
            }
            </div>
            
            <form className="al-inp-wr fx-c">
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
                        required
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
                        placeholder="https://example.com"
                        autoComplete="false"
                        required
                        value={linkNew}
                        onChange={(e) => setNewLink({ ...newLink, linkNew: e.target.value })}
                    />
                    <span className="txt-sm txt-gray">Link must start with https://</span>
                </label>
                <button 
                    className="btn btn-outline btn-wt-i btn-cr al-btn"
                    type="submit"
                    onClick={addLinkHandler}
                >
                    <span className="txt-sm">Add</span>
                    <span className="al-btn-i material-icons-outlined">add</span>
                </button>
            </form>
        </div>
    );
}