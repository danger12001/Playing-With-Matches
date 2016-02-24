//generates a random number between 1 and 9
  function randomNumber(){
  return Math.floor(Math.random() * 9) + 1;
  }
  // Function to print to the divs
  function divPrint(){
    var num1 = document.getElementById('num1');
    num1.innerHTML = randomNumber();
    var num2 = document.getElementById('num2');
    num2.innerHTML = randomNumber();
    var num3 = document.getElementById('num3');
    num3.innerHTML = randomnumber();
    var num4 = document.getElementById('num4');
    num4.innerHTML = randomnumber();
    var num5 = document.getElementById('num5');
    num5.innerHTML = randomnumber();
    var num6 = document.getElementById('num6');
    num6.innerHTML = randomnumber();
    var num7 = document.getElementById('num7');
    num7.innerHTML = randomnumber();
    var num8 = document.getElementById('num8');
    num8.innerHTML = randomnumber();
    var num9 = document.getElementById('num9');
    num9.innerHTML = randomnumber();
  }
// Random Number Test
console.log(randomNumber());
//Calling of divPrint
divPrint();
