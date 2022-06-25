import { quotes } from './quotes';


export function getRandomQuoteIndex() {
  function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  var quoteIndex = generateRandomInteger(quotes.length-1);
  return quoteIndex;
}