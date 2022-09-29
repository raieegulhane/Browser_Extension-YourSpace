import "./links-list.css";

export const LinksList = ({ linksList, onClick }) => {
    return(
        <div className="ll-wr fx-c gap-1">
            <ul className="ll-list list-noBullets fx-c">
            {
                linksList?.map(({ _id, linkName, link }) => {
                    return(
                        <li 
                            className="ll-item fx-r fx-al-c"
                            key={_id}
                        >
                            <span className="material-icons-outlined">link</span>
                            <a 
                                className="ll-link link-noDecoration"
                                href={link}
                                target="_blank"
                            >
                                {linkName}
                            </a>
                        </li>
                    );
                })
            }
            </ul>
            <button 
                className="btn btn-outline btn-wt-i btn-cr al-btn"
                onClick={onClick}
            >
                <span className="txt-sm">Add new link</span>
                <span className="al-btn-i material-icons-outlined">add</span>
            </button>
        </div>
    );
}