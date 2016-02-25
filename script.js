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
  function divPrint()
  {
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
      Row1Match = function(){
        var message = document.getElementById("MessageBox");
        if (num1.innerHTML === num2.innerHTML){
          num3.classList.remove("highlight");
          num4.classList.remove("highlight");
          num5.classList.remove("highlight");
          num6.classList.remove("highlight");
          num7.classList.remove("highlight");
          num8.classList.remove("highlight");
          num9.classList.remove("highlight");
          num1.classList.add("highlight");
          num2.classList.add("highlight");
          message.innerHTML = "A1 and A2 have matched";
        }
      else if (num1.innerHTML === num3.innerHTML){
          num2.classList.remove("highlight");
          num4.classList.remove("highlight");
          num5.classList.remove("highlight");
          num6.classList.remove("highlight");
          num7.classList.remove("highlight");
          num8.classList.remove("highlight");
          num9.classList.remove("highlight");
          num1.classList.add("highlight");
          num3.classList.add("highlight");
          message.innerHTML = "A1 and A3 have matched";
        }
      else if (num2.innerHTML === num3.innerHTML){
          num1.classList.remove("highlight");
          num4.classList.remove("highlight");
          num5.classList.remove("highlight");
          num6.classList.remove("highlight");
          num7.classList.remove("highlight");
          num8.classList.remove("highlight");
          num9.classList.remove("highlight");
          num2.classList.add("highlight");
          num3.classList.add("highlight");
          message.innerHTML = "A1 and A2 have matched";
        }
      };
      Row2Match = function(){
        var message = document.getElementById("MessageBox");
        if (num4.innerHTML === num5.innerHTML){
          num3.classList.remove("highlight");
          num1.classList.remove("highlight");
          num2.classList.remove("highlight");
          num6.classList.remove("highlight");
          num7.classList.remove("highlight");
          num8.classList.remove("highlight");
          num9.classList.remove("highlight");
          num4.classList.add("highlight");
          num5.classList.add("highlight");
          message.innerHTML = "B1 and B2 have matched";
        }
      else if (num4.innerHTML === num6.innerHTML){
          num2.classList.remove("highlight");
          num3.classList.remove("highlight");
          num5.classList.remove("highlight");
          num1.classList.remove("highlight");
          num7.classList.remove("highlight");
          num8.classList.remove("highlight");
          num9.classList.remove("highlight");
          num4.classList.add("highlight");
          num6.classList.add("highlight");
          message.innerHTML = "B1 and B3 have matched";
        }
      else if (num5.innerHTML === num6.innerHTML){
          num1.classList.remove("highlight");
          num4.classList.remove("highlight");
          num2.classList.remove("highlight");
          num3.classList.remove("highlight");
          num7.classList.remove("highlight");
          num8.classList.remove("highlight");
          num9.classList.remove("highlight");
          num5.classList.add("highlight");
          num6.classList.add("highlight");
          message.innerHTML = "B2 and B3 have matched";
        }
      };
      Row3Match = function(){
        var message = document.getElementById("MessageBox");
        if (num7.innerHTML === num8.innerHTML){
          num3.classList.remove("highlight");
          num4.classList.remove("highlight");
          num5.classList.remove("highlight");
          num6.classList.remove("highlight");
          num2.classList.remove("highlight");
          num1.classList.remove("highlight");
          num9.classList.remove("highlight");
          num7.classList.add("highlight");
          num8.classList.add("highlight");
          message.innerHTML = "C1 and C2 have matched";
        }
      else if (num7.innerHTML === num9.innerHTML){
          num2.classList.remove("highlight");
          num4.classList.remove("highlight");
          num5.classList.remove("highlight");
          num6.classList.remove("highlight");
          num1.classList.remove("highlight");
          num8.classList.remove("highlight");
          num3.classList.remove("highlight");
          num7.classList.add("highlight");
          num9.classList.add("highlight");
          message.innerHTML = "A1 and A3 have matched";
        }
      else if (num8.innerHTML === num9.innerHTML){
          num1.classList.remove("highlight");
          num4.classList.remove("highlight");
          num5.classList.remove("highlight");
          num6.classList.remove("highlight");
          num7.classList.remove("highlight");
          num2.classList.remove("highlight");
          num3.classList.remove("highlight");
          num8.classList.add("highlight");
          num9.classList.add("highlight");
          message.innerHTML = "C2 and C3 have matched";
        }
      };
      Col1Match = function(){
        var message = document.getElementById("MessageBox");
        if (num1.innerHTML === num4.innerHTML){
          num3.classList.remove("highlight");
          num2.classList.remove("highlight");
          num5.classList.remove("highlight");
          num6.classList.remove("highlight");
          num2.classList.remove("highlight");
          num1.classList.remove("highlight");
          num9.classList.remove("highlight");
          num1.classList.add("highlight");
          num4.classList.add("highlight");
          message.innerHTML = "A1 and B1 have matched";
        }
      else if (num1.innerHTML === num7.innerHTML){
          num2.classList.remove("highlight");
          num4.classList.remove("highlight");
          num5.classList.remove("highlight");
          num6.classList.remove("highlight");
          num9.classList.remove("highlight");
          num8.classList.remove("highlight");
          num3.classList.remove("highlight");
          num1.classList.add("highlight");
          num7.classList.add("highlight");
          message.innerHTML = "A1 and C1 have matched";
        }
      else if (num4.innerHTML === num7.innerHTML){
          num1.classList.remove("highlight");
          num3.classList.remove("highlight");
          num5.classList.remove("highlight");
          num6.classList.remove("highlight");
          num8.classList.remove("highlight");
          num2.classList.remove("highlight");
          num3.classList.remove("highlight");
          num7.classList.add("highlight");
          num9.classList.add("highlight");
          message.innerHTML = "B1 and C1 have matched";
        }
      };
      Col2Match = function(){
        var message = document.getElementById("MessageBox");
        if (num2.innerHTML === num5.innerHTML){
          num3.classList.remove("highlight");
          num4.classList.remove("highlight");
          num7.classList.remove("highlight");
          num6.classList.remove("highlight");
          num8.classList.remove("highlight");
          num1.classList.remove("highlight");
          num9.classList.remove("highlight");
          num2.classList.add("highlight");
          num5.classList.add("highlight");
          message.innerHTML = "A2 and B2 have matched";
        }
      else if (num2.innerHTML === num8.innerHTML){
          num1.classList.remove("highlight");
          num4.classList.remove("highlight");
          num5.classList.remove("highlight");
          num6.classList.remove("highlight");
          num9.classList.remove("highlight");
          num7.classList.remove("highlight");
          num3.classList.remove("highlight");
          num2.classList.add("highlight");
          num8.classList.add("highlight");
          message.innerHTML = "A2 and C2 have matched";
        }
      else if (num5.innerHTML === num8.innerHTML){
          num1.classList.remove("highlight");
          num3.classList.remove("highlight");
          num7.classList.remove("highlight");
          num6.classList.remove("highlight");
          num9.classList.remove("highlight");
          num2.classList.remove("highlight");
          num3.classList.remove("highlight");
          num5.classList.add("highlight");
          num8.classList.add("highlight");
          message.innerHTML = "B2 and C2 have matched";
        }
      };
      Col1Match = function(){
        var message = document.getElementById("MessageBox");
        if (num1.innerHTML === num4.innerHTML){
          num3.classList.remove("highlight");
          num2.classList.remove("highlight");
          num5.classList.remove("highlight");
          num6.classList.remove("highlight");
          num2.classList.remove("highlight");
          num1.classList.remove("highlight");
          num9.classList.remove("highlight");
          num1.classList.add("highlight");
          num4.classList.add("highlight");
          message.innerHTML = "A1 and B1 have matched";
        }
      else if (num1.innerHTML === num7.innerHTML){
          num2.classList.remove("highlight");
          num4.classList.remove("highlight");
          num5.classList.remove("highlight");
          num6.classList.remove("highlight");
          num9.classList.remove("highlight");
          num8.classList.remove("highlight");
          num3.classList.remove("highlight");
          num1.classList.add("highlight");
          num7.classList.add("highlight");
          message.innerHTML = "A1 and C1 have matched";
        }
      else if (num4.innerHTML === num7.innerHTML){
          num1.classList.remove("highlight");
          num3.classList.remove("highlight");
          num5.classList.remove("highlight");
          num6.classList.remove("highlight");
          num8.classList.remove("highlight");
          num2.classList.remove("highlight");
          num3.classList.remove("highlight");
          num7.classList.add("highlight");
          num9.classList.add("highlight");
          message.innerHTML = "B1 and C1 have matched";
        }
      };
      Col2Match = function(){
        var message = document.getElementById("MessageBox");
        if (num2.innerHTML === num5.innerHTML){
          num3.classList.remove("highlight");
          num1.classList.remove("highlight");
          num4.classList.remove("highlight");
          num6.classList.remove("highlight");
          num2.classList.remove("highlight");
          num1.classList.remove("highlight");
          num9.classList.remove("highlight");
          num2.classList.add("highlight");
          num5.classList.add("highlight");
          message.innerHTML = "A2 and B2 have matched";
        }
      else if (num2.innerHTML === num8.innerHTML){
          num1.classList.remove("highlight");
          num4.classList.remove("highlight");
          num5.classList.remove("highlight");
          num6.classList.remove("highlight");
          num9.classList.remove("highlight");
          num7.classList.remove("highlight");
          num3.classList.remove("highlight");
          num2.classList.add("highlight");
          num8.classList.add("highlight");
          message.innerHTML = "A2 and C2 have matched";
        }
      else if (num5.innerHTML === num8.innerHTML){
          num1.classList.remove("highlight");
          num3.classList.remove("highlight");
          num7.classList.remove("highlight");
          num6.classList.remove("highlight");
          num9.classList.remove("highlight");
          num2.classList.remove("highlight");
          num3.classList.remove("highlight");
          num5.classList.add("highlight");
          num8.classList.add("highlight");
          message.innerHTML = "B2 and C2 have matched";
        }
      };
      Col3Match = function(){
        var message = document.getElementById("MessageBox");
        if (num3.innerHTML === num6.innerHTML){
          num2.classList.remove("highlight");
          num1.classList.remove("highlight");
          num4.classList.remove("highlight");
          num5.classList.remove("highlight");
          num2.classList.remove("highlight");
          num1.classList.remove("highlight");
          num9.classList.remove("highlight");
          num3.classList.add("highlight");
          num6.classList.add("highlight");
          message.innerHTML = "A3 and B3 have matched";
        }
      else if (num3.innerHTML === num9.innerHTML){
          num1.classList.remove("highlight");
          num4.classList.remove("highlight");
          num5.classList.remove("highlight");
          num6.classList.remove("highlight");
          num8.classList.remove("highlight");
          num7.classList.remove("highlight");
          num2.classList.remove("highlight");
          num3.classList.add("highlight");
          num9.classList.add("highlight");
          message.innerHTML = "A3 and C3 have matched";
        }
      else if (num6.innerHTML === num9.innerHTML){
          num1.classList.remove("highlight");
          num3.classList.remove("highlight");
          num7.classList.remove("highlight");
          num5.classList.remove("highlight");
          num8.classList.remove("highlight");
          num2.classList.remove("highlight");
          num3.classList.remove("highlight");
          num6.classList.add("highlight");
          num9.classList.add("highlight");
          message.innerHTML = "B3 and C3 have matched";
        }
      };



//button eventListener
function button(){
  var button = document.getElementById("Refresh");
 divPrint();
 // highlight();
 Row1Match();
 Row2Match();
 Row3Match();
 Col1Match();
 Col2Match();
 Col3Match();
}
var El = document.getElementById("Refresh");
El.addEventListener("click",button,true);

// Random Number Test
console.log(randomNumber());
//Calling of divPrint
divPrint();
// highlight();
Row1Match();
Row2Match();
Row3Match();
Col1Match();
Col2Match();
Col3Match();
