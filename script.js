//generates a random number between 1 and 3
  function randomNumber(){
  return Math.floor(Math.random() * 3) + 1;
  }
  var message = document.getElementById("MessageBox");
  DisplayMessage = function(){
  var Messagebox = row1.innerHTML + row2.message + row3.message + col1.message + col2.message + col3.message;
    message.innerHTML = Messagebox;
  };
var numbers = document.getElementsByClassName("numberBlock");
  // Function to print to the divs
  function divPrint()
  {
    for (var x = 0; x < numbers.length;x ++){
      numbers[x].innerHTML = randomNumber();
    }
  }
  var row1 = function() {
    if (num1.innerHTML === num2.innerHTML){
      num3.classList.remove("highlight");
      num1.classList.add("highlight");
      num2.classList.add("highlight");
      message.innerHTML = "A1 and A2 match";
    }
    if (num1.innerHTML === num3.innerHTML){
      num2.classList.remove("highlight");
      num1.classList.add("highlight");
      num3.classList.add("highlight");
      message.innerHTML = "A1 and A3 match";
    }
    if (num2.innerHTML === num3.innerHTML){
      num1.classList.remove("highlight");
      num2.classList.add("highlight");
      num3.classList.add("highlight");
      message.innerHTML = "A2 and A3 match";
    }
   if(num1.innerHTML === num2.innerHTML && num1.innerHTML === num3.innerHTML && num2.innerHTML === num3.innerHTML){
     num4.classList.remove("highlight");
     num5.classList.remove("highlight");
     num6.classList.remove("highlight");
     num7.classList.remove("highlight");
     num8.classList.remove("highlight");
     num9.classList.remove("highlight");
      num1.classList.add("highlight");
      num2.classList.add("highlight");
      num3.classList.add("highlight");
      message.innerHTML = "Row 1 has matched";
    }
  };
  var col1 = function() {
    if (num1.innerHTML === num4.innerHTML){
      num7.classList.remove("highlight");
      num4.classList.add("highlight");
      num1.classList.add("highlight");
      message.innerHTML = "A1 and B1 match";
    }
    if (num1.innerHTML === num7.innerHTML){
      num4.classList.remove("highlight");
      num1.classList.add("highlight");
      num7.classList.add("highlight");
      message.innerHTML = "A1 and C1 match";
    }
    if (num4.innerHTML === num7.innerHTML){
      num1.classList.remove("highlight");
      num4.classList.add("highlight");
      num7.classList.add("highlight");
      message.innerHTML = "B1 and C1 match";
    }
    if(num1.innerHTML === num4.innerHTML && num1.innerHTML === num7.innerHTML && num4.innerHTML === num7.innerHTML){
      num4.classList.remove("highlight");
      num5.classList.remove("highlight");
      num6.classList.remove("highlight");
      num7.classList.remove("highlight");
      num8.classList.remove("highlight");
      num9.classList.remove("highlight");
      num1.classList.add("highlight");
      num4.classList.add("highlight");
      num7.classList.add("highlight");
      message.innerHTML = "Column 1 has matched";
    }
  };
  var row2 = function() {
    if (num4.innerHTML === num5.innerHTML){
      num6.classList.remove("highlight");
      num4.classList.add("highlight");
      num5.classList.add("highlight");
      message.innerHTML = "B1 and B2 has matched";
    }
    if (num4.innerHTML === num6.innerHTML){
      num5.classList.remove("highlight");
      num4.classList.add("highlight");
      num6.classList.add("highlight");
      message.innerHTML = "B1 and B3 has matched";
    }
    if (num5.innerHTML === num6.innerHTML){
      num4.classList.remove("highlight");
      num5.classList.add("highlight");
      num6.classList.add("highlight");
      message.innerHTML = "B2 and B3 has matched";
    }
    if(num4.innerHTML === num5.innerHTML && num4.innerHTML === num6.innerHTML && num5.innerHTML === num6.innerHTML){
      num4.classList.remove("highlight");
      num5.classList.remove("highlight");
      num6.classList.remove("highlight");
      num7.classList.remove("highlight");
      num8.classList.remove("highlight");
      num9.classList.remove("highlight");
      num4.classList.add("highlight");
      num5.classList.add("highlight");
      num6.classList.add("highlight");
      message.innerHTML = "Row 2 has matched!";
    }
  };
  var col2 = function() {
    if (num2.innerHTML === num5.innerHTML){
      num8.classList.remove("highlight");
      num2.classList.add("highlight");
      num5.classList.add("highlight");
      message.innerHTML = "A2 and B2 has matched";
    }
    if (num2.innerHTML === num8.innerHTML){
      num5.classList.remove("highlight");
      num2.classList.add("highlight");
      num8.classList.add("highlight");
      message.innerHTML = "B2 and C2 has matched";
    }
    if (num5.innerHTML === num8.innerHTML){
      num2.classList.remove("highlight");
      num5.classList.add("highlight");
      num8.classList.add("highlight");
      message.innerHTML = "B2 and C2 has matched";
    }
    if(num5.innerHTML === num8.innerHTML && num2.innerHTML === num5.innerHTML && num2.innerHTML === num8.innerHTML){
      num4.classList.remove("highlight");
      num5.classList.remove("highlight");
      num6.classList.remove("highlight");
      num7.classList.remove("highlight");
      num8.classList.remove("highlight");
      num9.classList.remove("highlight");
      num2.classList.add("highlight");
      num5.classList.add("highlight");
      num8.classList.add("highlight");
      message.innerHTML = "Column 2 has matched!";
    }
  };
  var row3 = function() {
    if (num7.innerHTML === num8.innerHTML){
      num9.classList.remove("highlight");
      num7.classList.add("highlight");
      num8.classList.add("highlight");
      message.innerHTML = "C1 and C2 has matched";

    }
    if (num7.innerHTML === num9.innerHTML){
      num8.classList.remove("highlight");
      num7.classList.add("highlight");
      num9.classList.add("highlight");
      message.innerHTML = "C1 and C3 has matched";
    }
    if (num8.innerHTML === num9.innerHTML){
      num7.classList.remove("highlight");
      num8.classList.add("highlight");
      num9.classList.add("highlight");
      message.innerHTML = "C2 and C3 has matched";
    }
    if(num7.innerHTML === num8.innerHTML && num7.innerHTML === num9.innerHTML && num8.innerHTML === num9.innerHTML){
      num4.classList.remove("highlight");
      num5.classList.remove("highlight");
      num6.classList.remove("highlight");
      num7.classList.remove("highlight");
      num8.classList.remove("highlight");
      num9.classList.remove("highlight");
      num7.classList.add("highlight");
      num8.classList.add("highlight");
      num9.classList.add("highlight");
      message.innerHTML = "Row 3 has matched!";
    }
  };

  var col3 = function() {
    if (num3.innerHTML === num6.innerHTML){
      num9.classList.remove("highlight");
      num3.classList.add("highlight");
      num6.classList.add("highlight");
      message.innerHTML = "A3 and B3 has matched";

    }
    if (num3.innerHTML === num9.innerHTML){
      num6.classList.remove("highlight");
      num3.classList.add("highlight");
      num9.classList.add("highlight");
      message.innerHTML = "A3 and C3 has matched";
    }
    if (num6.innerHTML === num9.innerHTML){
      num3.classList.remove("highlight");
      num6.classList.add("highlight");
      num9.classList.add("highlight");
      message.innerHTML = "B3 and C3 has matched";
    }
  if(num3.innerHTML === num6.innerHTML && num3.innerHTML === num9.innerHTML && num6.innerHTML === num9.innerHTML){
    num4.classList.remove("highlight");
    num5.classList.remove("highlight");
    num6.classList.remove("highlight");
    num7.classList.remove("highlight");
    num8.classList.remove("highlight");
    num9.classList.remove("highlight");
      num3.classList.add("highlight");
      num6.classList.add("highlight");
      num9.classList.add("highlight");
      message.innerHTML = "Column 3 has matched!";
    }
  };
  // var messsageBlank = function(){
  //   if (message.innerHTML === "" || "** and ** has matched"){
  //     message.innerHTML = "There has been no row/column/diagonal matches";
  //   }
  // };

grid = function(){
  row1();
  row2();
  row3();
  col1();
  col2();
  col3();
  // messageBlank();
};
grid();

//for loop

// var match = 1;
// for (var x = 0; x < numbers.length;x ++){
 // // console.log(numbers[x].id);
//   for (var y = 0; y < numbers.length;y ++){
//
// for (var z = 0; z < numbers.length;z ++){}
//       if (numbers[x].id === numbers[y].id || numbers[z].id) {
//         numbers[x].classList.add("highlight");
//       if (parseInt(numbers[x].id.substring(3)) % 3 === 0) {
//
//
//       }
//     }
//
//   }
//
// }

//button eventListener
var El = document.getElementById("Refresh");
El.addEventListener("click",button,true);

function button(){
  var button = document.getElementById("Refresh");
 divPrint();
 grid();
}
var numbers = document.getElementsByClassName("numberBlock");
  // Function to print to the divs
  function divPrint()
  {
    for (var x = 0; x < numbers.length;x ++){

      numbers[x].innerHTML = randomNumber();
    }
  }

//  var match = 1;
// for (var x = 0; x < numbers.length;x ++){
// // console.log(numbers[x].id);
//   for (var y = 0; y < numbers.length;y ++){
//
// for (var z = 0; z < numbers.length;z ++){}
//     if (numbers[x].id === numbers[y].id || numbers[z].id) {
//         numbers[x].classList.add("highlight");
//       if (parseInt(numbers[x].id.substring(3)) % 3 === 0) {
//
//
//       }
//     }
//
//   }
//
// }

//button eventListener
function button(){
  var button = document.getElementById("Refresh");
 divPrint();
row1();
row2();
row3();
col1();
col2();
col3();
}
var El = document.getElementById("Refresh");
El.addEventListener("click",button,true);

// Random Number Test
console.log(randomNumber());
//Calling of divPrint
divPrint();
