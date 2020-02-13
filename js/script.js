/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

var quotes = [
  {
    quote: "The modern computer hovers between the obsolescent and the nonexistent.",
    source: "Sydney Brenner"
  }, 
  {
    quote: "There's a lot that can be done for people who are using technology in a better way.",
    source: "Bill Gates",
    year:"2019"
  }, 
  {
    quote: "First, solve the problem. Then, write the code.",
    source: "John Johnson",
    citation:"Book of Random Things, 2020",
    tag:"Programming"
  }, 
  {
    quote: "Users truly don’t know what they want in a program until they use it.",
    source: "Unknown"
  }, 
  {
    quote: "Technology makes it possible for people to gain control over everything, except over technology.",
    source: "John Tudor"
  },
  {
    quote: "The technologies which have had the most profound effects on human life are usually simple.",
    source: "Freeman Dyson",
    tag:"Philosophy"
  },
  {
    quote: "Part of the inhumanity of the computer is that, once it is competently programmed and working smoothly, it is completely honest.",
    source: "Isaac Asimov"
  }
]; 

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * `printQuote` function
***/

function printQuote () {
  var randomQuoteObject = getRandomQuote();
  console.log(randomQuoteObject);
  var htmlString = '<p class="quote">' + randomQuoteObject.quote + '</p>' + '<p class="source">'+ randomQuoteObject.source ;
  if (randomQuoteObject.citation) {
    htmlString += '<span class="citation">' + randomQuoteObject.citation + '</span>';
  }
  if (randomQuoteObject.year) {
    htmlString += '<span class="year">' + randomQuoteObject.year + '</span>';
  }
  if (randomQuoteObject.tag) {
    htmlString += ' <span class="tag">(' + randomQuoteObject.tag + ')</span> ';
  }
  htmlString.concat('</p>');
  return document.getElementById('quote-box').innerHTML = htmlString; 
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);