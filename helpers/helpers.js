function getRandomInt(min = 0, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomDouble() {
  return (Math.random() * 2 - 1) + (Math.random() * 2 - 1) + (Math.random() * 2 - 1);
  // 0.5689553574385 or - 1.7833453435435
};

function randomWordsInSentence(mean, standard_deviation) {
  return Math.round(randomDouble() * standard_deviation + mean);
  // 18 - 35 (range always)
};

function getNumberOfCommasInSentence(totalWordsInSentence) {
  /* base = 6 is arbitrary number */
  let base = 6, average, standard_deviation;
  average = Math.log(totalWordsInSentence) / Math.log(base);
  standard_deviation = average / base;
  return randomWordsInSentence(average, standard_deviation);
};

function puncutateSentence(sentence) {
  /* sentence is an array contaning no of words like ['lorem','ipsum','dolar','sit','amet'] */
  let wordsInSentence = sentence.length;
  /* End the last word of sentence with a period. */
  sentence[wordsInSentence - 1] = sentence[wordsInSentence - 1] + '.';

  // if words in sentence is < 4 then return the sentence
  if (wordsInSentence < 4) {
    return sentence;
  }
  /* Find out the number of commas a sentence can have */
  const numberOfCommas = getNumberOfCommasInSentence(wordsInSentence) + 1;
  let i, index;
  for (i = 0; i < numberOfCommas; i++) {
    index = Math.round(i * wordsInSentence / (numberOfCommas + 1));

    if (index < (wordsInSentence - 1) && index > 0) {
      /* Add the comma. */
      sentence[index] += ',';
    }
  }
  /* Capitalize the first word in the sentence. */
  sentence[0] = sentence[0].charAt(0).toUpperCase() + sentence[0].slice(1);
  return sentence;
}

module.exports = {
  getRandomInt,
  randomDouble,
  randomWordsInSentence,
  getNumberOfCommasInSentence,
  puncutateSentence
};