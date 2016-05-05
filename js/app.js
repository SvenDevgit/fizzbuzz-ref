$( document ).ready(function() {

var varInt = prompt('Please enter a positive integer');

varInt = parseInt(varInt,10);

console.log(fizzBuzz(varInt));

  function fizzBuzz( parInt){
    for (var i=1; i<parInt; i++)
    {
      if (i%3==0 && i%5==0)
      {  voutput = 'FizzBuzz';
      }
      else if (i%3==0)
      {  voutput = 'Fizz';
      }
      else if (i%5==0)
      { voutput = 'Buzz';
      }
      else
      { voutput = i;  
      }
      $('body').append('<p>' + voutput + '</p>');
    }
  };


});  

