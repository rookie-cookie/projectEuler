//problem1
function calculate1(){
  var total = 0;
  var inputNumber = document.getElementById("inputNumber1").value;
  for (num=1; num < inputNumber; num++){
    if (num%3 == 0 || num%5 == 0){
      total += num;
    }
  }
  document.getElementById("output1").innerHTML = total;
} //end of function

//problem2
function calculate2(){
  var f = [];
  f[0] = 0;
  f[1] = 1;
  var sumEven = 0;

  var x = document.getElementById("inputNumber2").value;
  for (i=2; i<x; i++){  //start at f[2]
    f[i] = f[i-1]+f[i-2]; //1+0
    if (f[i]<x){
      if (f[i]%2 == 0){
        sumEven += f[i];
      }
    }
  }
  document.getElementById("output2").innerHTML = sumEven;
}
