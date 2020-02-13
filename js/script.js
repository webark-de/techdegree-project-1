/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Introduction: 
// The code below is used to generate random quote every time the user clicks on the button "Show another quote"


// Variable quotes is an array containing quote objects with diffeerent properties
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
    source: "Unknown",
    year:"2019"
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

// Function which contains random quote from thee array quotes.
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

// Function which generates random color and updates the body background
function getRandomColor() {
  var color = '#' + Math.random().toString(16).slice(-6);
  return document.body.style.backgroundColor = color;
}

//Function which is printing random quote. 
function printQuote () {
  var randomQuoteObject = getRandomQuote();
  //Storing the random quote object properties in the variable. 
  var htmlString = '<p class="quote">' + randomQuoteObject.quote + '</p>' + '<p class="source">'+ randomQuoteObject.source ;

  //Checking if the quote has citation,year or tag. If yes, the propery values are added to the html string. 
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

  //Calling the function to update th color together with th quot
  getRandomColor();

  //Showing the quote inside the quote-box element. 
  return document.getElementById('quote-box').innerHTML = htmlString; 
}

//Runing the printQuote function every 10 seconds
function autoReload (){
  setInterval(printQuote, 10000);
}
autoReload ();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);