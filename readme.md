# Lorem_Ipsum

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Lorem_Ipsum is a light-weight, quick sample text generator for node.js or any Front End that uses JavaScript with ZERO dependency.

  - Generate Words
  - Generate Paragraphs on the Go!
  - Auto Punctuation inbuilt.
  - Light Weight (10 kB measured properly).
  - Experience the Magic.

### Installation

Lorem_Ipsum requires [Node.js](https://nodejs.org/) v6+ or A browser Support ES5 alteast to run.

Go to directory, install and start the server.

```sh
$ cd text_generator
$ npm install lorem_ipsum
```

### Github Repo:
| Repo | README |
| ------ | ------ |
| Github | [https://github.com/amandeeptherockstar/lorem_ipsum] |


### Load Module in Project

Want to contribute? Great!

Load the Module:
```sh
const LoremIpsum = require('lorem_ipsum');
```

Create an Instance of LoremIpsum (uses Default Dictionary):
```sh
const loremIpsum = new LoremIpsum();
```

You can also pass the custom LoremIpsum dictionary as an array to constructor:
```sh
const dictionary = ['The','crazy','fox','jump','over','the','dog',...........];
const loremIpsum = new LoremIpsum(dictionary);
```
#### Methods
Module gives us two methods to use:
```sh
#1. getWords(count, startWithLoremIpsum);
```
** count: int = total words a lorem ipsum will contain. Type of count is int
** startWithLoremIpsum: boolean = do the lorem ipsum starts with actually lorem ipsum? Type of startWithLoremIpsum is boolean, by default its value is true.

```sh
#2. getParagraphs(count, min, max, startWithLoremIpsum);
```
** count: int = total amount of paragraphs a lorem ipsum will contain. Type of count is int. Default value is 3.
** min: int = minimum amount of words each paragraphs will contains atleast. Type of min is int. Default value is 35.
** max: int = maximum amount of words each paragraphs will contains atmost. Type of min is int. Default value is 200.
** startWithLoremIpsum: boolean = do the lorem ipsum text starts with actually lorem ipsum? Type of startWithLoremIpsum is boolean, Default value is true.

### Examples
// getWords()
const text = loremIpsum.getWords(10, true);
Lorem ipsum dolor sit amet erat iaculis posuere, ullamcorper nunc.

const text = loremIpsum.getWords(10, false);
Commodo bibendum quam vestibulum, et vehicula semper mi vulputate fermentum.

// getParagraphs()
const text = loremIpsum.getParagraphs(2, 10, 20, false);

Dictumst dictumst a sit natoque malesuada praesent, platea eu amet pharetra eiusmod nam tortor risus urna do duis penatibus.
Congue lobortis aliquet nibh rutrum dictumst, neque sit incididunt cursus aenean, euismod rhoncus eros habitant senectus praesent vestibulum dolore.

const text = loremIpsum.getParagraphs(2, 10, 20, true);

Lorem ipsum dolor sit amet cum non ultricies, neque tristique venenatis risus.
Pretium scelerisque ultricies a rutrum, quam amet iaculis phasellus duis, vestibulum habitant scelerisque dictumst lorem augue fermentum.

License
----

ISC


**Free Package, Hell Yeah!**
