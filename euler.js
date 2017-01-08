function calculate(){
  var total = 0;
  var inputNumber = document.getElementById("inputNumber").value;
  for (num=1; num < inputNumber; num++){
    if (num%3 == 0 || num%5 == 0){

      total += num;
    }
  }
  document.getElementById("output").innerHTML = total;
} //end of function
