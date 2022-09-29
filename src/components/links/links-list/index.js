import { useList } from "../../../context";
import "./links-list.css";

export const LinksList = ({ setShowAddLink }) => {
    const { listState: { linksList }, listDispatch } = useList();

    return(
        <div className={`ll-wr fx-c ${linksList.length === 0 && "fx-al-c"} gap-1`}>
            {
                linksList.length > 0 &&
                <ul className="ll-list list-noBullets fx-c">
                {
                    linksList?.map(({ _id, linkName, link }) => {
                        return(
                            <li 
                                className="ll-item fx-r fx-js-sb fx-al-c"
                                key={_id}
                            >
                                <div className="ll-link-cn fx-r fx-al-c">
                                    <span className="material-icons-outlined">link</span>
                                    <a 
                                        className="ll-link link-noDecoration"
                                        href={link}
                                        target="_blank"
                                    >
                                        {linkName}
                                    </a>
                                </div>
                                <button 
                                    className="ll-btn-del btn-icon"
                                    onClick={() => listDispatch({type: "DELETE_LINK", payload: _id})}
                                >
                                    <span className="txt-sm material-icons-outlined">close</span>
                                </button>
                            </li>
                        );
                    })
                }
                </ul>
            }
            <button 
                className="btn btn-outline btn-wt-i btn-cr al-btn"
                onClick={() => setShowAddLink(true)}
            >
                <span className="txt-sm">Add new link</span>
                <span className="al-btn-i material-icons-outlined">add</span>
            </button>
        </div>
    );
}