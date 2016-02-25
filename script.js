//generates a random number between 1 and 3
  function randomNumber(){
  return Math.floor(Math.random() * 3) + 1;
  }

  var num1 = document.getElementById('num1');
  var num2 = document.getElementById('num2');
  var num3 = document.getElementById('num3');
  var num4 = document.getElementById('num4');
  var num5 = document.getElementById('num5');
  var num6 = document.getElementById('num6');
  var num7 = document.getElementById('num7');
  var num8 = document.getElementById('num8');
  var num9 = document.getElementById('num9');
var numbers = document.querySelectorAll("numberBlock");

  // Function to print to the divs
  function divPrint(){
    num1.innerHTML = randomNumber();
    num2.innerHTML = randomNumber();
    num3.innerHTML = randomNumber();
      num4.innerHTML = randomNumber();
      num5.innerHTML = randomNumber();
      num6.innerHTML = randomNumber();
        num7.innerHTML = randomNumber();
        num8.innerHTML = randomNumber();
        num9.innerHTML = randomNumber();
      }
  // highlight Function
highlight = function(){
  var message = document.getElementById("MessageBox");

if (num1.innerHTML === num2.innerHTML){
  num1.classList.add("highlight");
  num2.classList.add("highlight");
  message.innerHTML = "A1 and A2 have matched";
}
else if(num1.innerHTML === num3.innerHTML){
  num1.classList.add("highlight");
  num3.classList.add("highlight");
  message.innerHTML = "A1 and A3 have matched";
}
else if(num2.innerHTML === num3.innerHTML){
  num2.classList.add("highlight");
  num3.classList.add("highlight");
  message.innerHTML = "A2 and A3 have matched";
}

};

    // var mkDiv = function(){
    //   document.createElement('Div');
    // };
    // mkDiv("Hnum1").classList.add("highlight");

      // this.classList.toggle("highlight",num1 == num2 || num1 == num3 || num2 == num3);
// Calling Highlight
// highlight();
// Random Number Test
console.log(randomNumber());
//Calling of divPrint
divPrint();
highlight();
