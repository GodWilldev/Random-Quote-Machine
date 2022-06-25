import { useState } from 'react';
import '../styles/App.css';
import Quote from './Quote.js'
import ButtonGroup from './ButtonGroup';

import {colorGenerator} from '../datas/colorGenerator';
import Footer from './Footer';

function App() {

  const [currentQuoteIndex, updateQuote] = useState(0);
  var color = colorGenerator();


  return (
    <div className={"App bg-" +color}>
      <div id="quote-box" className='shadow-lg p-3 mb-5 bg-body'>
        <Quote currentQuoteIndex={currentQuoteIndex} color={color}/>
        <ButtonGroup currentQuoteIndex={currentQuoteIndex} updateQuote={updateQuote} color={color}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;