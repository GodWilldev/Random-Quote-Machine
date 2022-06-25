import { quotes } from '../datas/quotes';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';



function Quote({currentQuoteIndex, color}) {
    
    var quoteInfo = quotes[currentQuoteIndex];
    return (
        <blockquote className="blockquote">
        <p id="text" className="d-flex justify-content-center"><FaQuoteLeft /> {quoteInfo.quote} <FaQuoteRight /></p>
        <footer id="author" className="blockquote-footer d-flex justify-content-end">{quoteInfo.author}</footer>
        </blockquote>
    );
}
export default Quote;