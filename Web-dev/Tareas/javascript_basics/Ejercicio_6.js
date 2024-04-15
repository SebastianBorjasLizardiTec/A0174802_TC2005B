// Disclaimer: no conozco Hackerspeak y no encontré uno alfabeto concreto al respecto
const hackerhash = {
    'a': '4',
    'i': '1',
    'z': '2',
    'e': '3',
    's': '5',
    'g': '6',
    't': '7',
    'x': '8',
    'q': '9',
    'o': '0',
    ' ': '-'
  };
  
  function Hackerspeak(str) {
    str = str.toLowerCase();
    const newstr = str.replace(/[a-z\s]/g, function(match) {
      return hackerhash[match] || match;
    });
    return newstr;
  }
  
  console.log(Hackerspeak("Hello World"));