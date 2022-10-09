import "./quotes.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const Quotes = () => {
    const [quoteData, setQuoteData] = useState({ quote: "", author: "" });
    const { quote, author } = quoteData;

    const fetchQuoteFunction = async () => {
        const random = Math.floor(Math.random() * 1643 - 1);
        try {
            const { data } = await axios.get("https://type.fit/api/quotes");
            const { text, author } = data[random];
            setQuoteData({ quote: text, author: author });
        } catch (error) {
            console.log("ERROR__FETCH_QUOTE: ", error);
        }
    }

    useEffect (() => {
        fetchQuoteFunction();
    }, []);

    return(
        <div className="quote-wr fx-c fx-al-c">
            <p className="quote">"{quote}"</p>
            <p className="author"><i>~ {author === null ? "unknown" : author}</i></p>
        </div>
    );
}