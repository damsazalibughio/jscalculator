
var resultDisplayer = document.getElementById('resultDisplayer');
var equationDisplayer = document.getElementById('equationDisplayer');
var valueArr = [];

function getValue(value){

  valueArr.push(value);
  console.log(valueArr)


   // pop out double operators i.e ++ or +-
  var str =valueArr.toString().replace(/,/g,'');
  var len = str.length;  
  for(var i = 0; i< len; i++){
    if(str.slice(i, i + 2) === "++" || str.slice(i, i + 2) === "--" || str.slice(i, i + 2) === "**" || str.slice(i, i + 2) === "//" || str.slice(i, i + 2) === "%%"
    || str.slice(i, i + 2) === "+-" || str.slice(i, i + 2) === "+*" || str.slice(i, i + 2) === "+/" || str.slice(i, i + 2) === "+%"
    || str.slice(i, i + 2) === "-+" || str.slice(i, i + 2) === "-*" || str.slice(i, i + 2) === "-/" || str.slice(i, i + 2) === "-%"
    || str.slice(i, i + 2) === "*+" || str.slice(i, i + 2) === "*-" || str.slice(i, i + 2) === "*/" || str.slice(i, i + 2) === "*%"
    || str.slice(i, i + 2) === "/+" || str.slice(i, i + 2) === "/-" || str.slice(i, i + 2) === "/*" || str.slice(i, i + 2) === "/%"
    || str.slice(i, i + 2) === "%+" || str.slice(i, i + 2) === "%-" || str.slice(i, i + 2) === "%*" || str.slice(i, i + 2) === "%/") 
    {
     
      valueArr.pop();
      
    }

  }

  // pop out if first digit is +,* or /
  if(valueArr[0] =='+' || valueArr[0] =='*' || valueArr[0] =='/' || valueArr[0] =='%'){
    valueArr.pop();  
    resultDisplayer.innerText = valueArr;
    equationDisplayer.innerText =valueArr;     
  }
  
  else{
   
    // code for making thousand seperated by comma i.e 1,000,000
      var makeString = valueArr.toString().replace(/,/g,'');
      updateValue = makeString.toString().split(".");
      updateValue[0] =updateValue[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
      updateValue = updateValue.join(".") ;   
      resultDisplayer.innerText =updateValue;
  }    

}

//evaluating answer and getting result on screen
function getResult(){
    var getResult = document.getElementById('resultDisplayer').innerText;
    equationDisplayer.innerText =getResult;
    try {
        var makeString = valueArr.toString().replace(/,/g,'');
        var answer =  eval(makeString);
        answer = answer.toString().split(".");
        answer[0] =answer[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        answer = answer.join(".") ;   
        resultDisplayer.innerText =answer;  
        valueArr = [];
         valueArr.push(answer);
         
        
      }
      catch(err) {
        equationDisplayer.innerText = ' ';
        resultDisplayer.innerText ='Error'; 
        valueArr = [];
      }
    
    }

    // this function will clear last digit
function clearLast(){
  valueArr.pop();
  var makeString = valueArr.toString().replace(/,/g,'');
  clearValue = makeString.toString().split(".");
  clearValue[0] = clearValue[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
  clearValue =  clearValue.join(".") ;   
  resultDisplayer.innerText = clearValue;
  equationDisplayer.innerText = ' ';
}

// this function will clear all digits
function clearAll(){
  valueArr = [];
  resultDisplayer.innerText =' ';
  equationDisplayer.innerText = ' ';
}

