//  var btn = document.getElementById("btn");
function result() {
 var Result = 0;
 var question_1_answer = document.getElementById("q-1-a"); 
 var question_2 = document.getElementById("q-1-b"); 
 var question_3 = document.getElementById("q-1-c"); 
 var question_4 = document.getElementById("q-1-d"); 

 if(question_1_answer.checked === true){
   alert("Question 1 is right")
  }
  else{
    alert("Question 1 is wrong")
  }
 console.log(result())
}
