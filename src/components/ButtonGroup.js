import {FaTwitter} from 'react-icons/fa';

import {getRandomQuoteIndex} from '../datas/getRandomQuoteIndex';


function ButtonGroup({currentQuoteIndex, updateQuote, color}) {

    return (
        <div className='d-flex justify-content-between'>
          <a id="tweet-quote" title="tweet this quote" href="twitter.com/intent/tweet" target="_blank">
            <button type="button" className={"btn btn-"+color}><FaTwitter /></button>
          </a>
          <button type="button" id="new-quote" onClick={() => updateQuote(getRandomQuoteIndex())}
             className={"btn btn-"+color}>New quote
          </button>
        </div>
    );
}

export default ButtonGroup;