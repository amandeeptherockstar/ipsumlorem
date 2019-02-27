const helpers = require('./helpers/helpers');

const LoremIpsum = class {
  /* Users can pass their own custom array of words */
  constructor(customDictionary) {
    this.WORDS_PER_SENTENCE_AVG = 24.460;
    this.WORDS_PER_SENTENCE_STD = 5.080;
    if (customDictionary && customDictionary.length > 0) {
      this.words = customDictionary;
    } else {
      this.words = ["a", "ac", "accumsan", "adipiscing", "aenean", "aliqua", "aliquam", "aliquet", "amet", "ante", "arcu", "at", "auctor", "augue", "bibendum", "blandit", "commodo", "condimentum", "congue", "consectetur", "consequat", "convallis", "cras", "cum", "curabitur", "cursus", "dapibus", "diam", "dictum", "dictumst", "dignissim", "dis", "dolor", "dolore", "do", "donec", "dui", "duis", "egestas", "eget", "eiusmod", "eleifend", "elementum", "elit", "enim", "erat", "eros", "est", "et", "etiam", "eu", "euismod", "facilisi", "facilisis", "fames", "faucibus", "felis", "fermentum", "feugiat", "fringilla", "fusce", "gravida", "habitant", "habitasse", "hac", "hendrerit", "iaculis", "id", "imperdiet", "in", "incididunt", "integer", "interdum", "ipsum", "justo", "labore", "lacinia", "lacus", "laoreet", "lectus", "leo", "libero", "ligula", "lobortis", "lorem", "luctus", "maecenas", "magna", "magnis", "malesuada", "massa", "mattis", "mauris", "metus", "mi", "molestie", "mollis", "montes", "morbi", "mus", "nam", "nascetur", "natoque", "nec", "neque", "netus", "nibh", "nisi", "nisl", "non", "nulla", "nullam", "nunc", "odio", "orci", "ornare", "parturient", "pellentesque", "penatibus", "pharetra", "phasellus", "placerat", "platea", "porta", "porttitor", "posuere", "potenti", "praesent", "pretium", "proin", "pulvinar", "purus", "quam", "quis", "quisque", "rhoncus", "ridiculus", "risus", "rutrum", "sagittis", "sapien", "scelerisque", "sed", "sem", "semper", "senectus", "sit", "sociis", "sodales", "sollicitudin", "suscipit", "suspendisse", "tellus", "tempor", "tempus", "tincidunt", "tortor", "tristique", "turpis", "ullamcorper", "ultrices", "ultricies", "urna", "ut", "varius", "vehicula", "vel", "velit", "venenatis", "vestibulum", "vitae", "vivamus", "viverra", "volutpat", "vulputate"];
    }
  }
  /* Public methods user can call */
  getWords(count, startsWithLoremIpsum = true) {
    let wordsArray = [];
    if (count === 0) {
      return wordsArray;
    }
    if (count <= 5 && startsWithLoremIpsum) {
      let i;
      let words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];
      for (i = 0; i < count; i++) {
        wordsArray.push(words[i]);
      }
      words = [];
      return wordsArray.join(' ') + '.';
    }

    let totalWordsIndex = this.words.length - 1;
    let total = startsWithLoremIpsum ? count - 5 : count;
    let i, index, word;
    for (i = 1; i <= total; i++) {
      index = helpers.getRandomInt(0, totalWordsIndex);
      // dont use the word if the previous word is same as current
      word = this.words[index];
      // make sure the previous word dont match the current word, if so dont include it
      if (wordsArray[i - 1] === word) {
        // console.log(wordsArray[i - 1] + " + " + i + " " + word);
        i = i - 1;
      } else {
        wordsArray.push(word);
      }
    }
    // console.log(wordsArray);
    // console.log(wordsArray.length);

    const sentences = [];
    let current = 0;

    while (total > 0) {
      let sentenceLength = helpers.randomWordsInSentence(this.WORDS_PER_SENTENCE_AVG, this.WORDS_PER_SENTENCE_STD);
      // console.log(sentenceLength, 'sentence length');
      if (total - sentenceLength < 4) {
        // if number of word count - sentence length is less than 4, then word count should be assigned to sentence length
        sentenceLength = total;
      }

      total = total - sentenceLength;
      let sentence = [];

      for (let j = current; j < (current + sentenceLength); j++) {
        sentence.push(wordsArray[j]);
      }
      sentence = helpers.puncutateSentence(sentence);
      current = current + sentenceLength;
      sentences.push(sentence.join(' '));
    }

    if (startsWithLoremIpsum) {
      sentences[0] = sentences[0].toLowerCase();
      return 'Lorem ipsum dolor sit amet ' + sentences.join(' ');
    } else {
      return sentences.join(' ');
    }
  }

  getParagraphs(count = 3, minWords = 35, maxWords = 200, startsWithLoremIpsum = true) {
    /* Each paragraph will contain random between min 35 words and max of 200 words */
    let i, words, paragraphs = [];
    for (i = 1; i <= count; i++) {
      words = helpers.getRandomInt(minWords, maxWords);
      paragraphs.push(this.getWords(words, startsWithLoremIpsum && i === 1));
    }
    return paragraphs.join('\r\n\r\n');
  }
}

module.exports = LoremIpsum;