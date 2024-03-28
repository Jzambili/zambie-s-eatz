import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function QouteSection(){
    return(
        <div className="section quote">
            <p className="qoute-text"><FontAwesomeIcon icon={faQuoteLeft} />Yesterday is history, tomorrow a mystery and today is the gift tht why we call it a present</p>
            <p className="qoute-author"> Mr. Oogway</p>
        </div>
    )
}
/* use ur own info */