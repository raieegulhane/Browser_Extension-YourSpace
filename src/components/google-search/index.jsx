import "./google-search.css";

export const GoogleSearch = () => {
    return(
        <form 
            className="gs-wr fx-r fx-al-c gap-1"
            action="https://www.google.com/search"
            method="get"
            target="_blank"
        >
            <input 
                className="gs-inp"
                type="text"
                placeholder="Google search"
                name="google-search"
            />
            <button
                className="gs-btn"
                type="submit"
            >
                <span className="material-icons-outlined">
                    search
                </span>
            </button>
        </form>
    );
}