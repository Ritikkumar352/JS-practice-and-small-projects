const form = document.querySelector("form");
console.log(form);
const result=document.querySelector('.result');
const result2=document.querySelector('.result2');

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let bmi=0;
  const height = document.querySelector("#height").value;
  console.log(height);
  const weight = document.querySelector("#weight").value;
  console.log(weight);
  if (height == "" || isNaN(height) || height < 0) {
    console.log("Enter a valid height value");
  } else if (weight == "" || isNaN(weight) || weight < 0) {
    console.log("Enter a valid weight value");
  }
  else{
    bmi =(weight/((height*height)/10000)).toFixed(2);
    result.innerHTML=`<span>${bmi}</span>`;
  }
  console.log(result.innerHTML);
  if(bmi<=18.6){
    result2.innerHTML="You are under Weight";
  }else if(bmi>18.6 && bmi<24.9){
    result2.innerHTML="Your BMI is in normal range"
  }
  else if (bmi>=24.9){
    result2.innerHTML="You are over Weight";
  }
});
