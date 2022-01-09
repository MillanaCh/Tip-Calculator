const bill = document.querySelector("#bill") //input
const service = document.querySelector("#service"); //select with options
const people = document.querySelector("#people") //input
const result = document.querySelector("#result") //input
const each = document.querySelector("#each") //input
const button = document.querySelector("#calculate")
const tip = document.querySelector("#tipP")
button.addEventListener("click", calculate)

function calculate(){
  let index = service.selectedIndex;
  let totalTip = Number(bill.value)*Number(service.options[index].value)/100
  result.style.visibility = "visible";
  tip.style.visibility = "visible";
  if (people.value > 1){
    result.innerHTML = (totalTip/Number(people.value)).toFixed(2)
    each.style.visibility = "visible";
  } else{
    result.innerHTML = totalTip.toFixed(2)
    each.style.visibility = "visible";
  }
}

