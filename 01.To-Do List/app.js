const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  if(inputBox.value === ''){
    alert("You must write something!!");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;  //text inside li variable is value of inputBox
    listContainer.appendChild(li);  //li value will be displayed in listContainer

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  savaData();
}

//for deleting the to-do task

listContainer.addEventListener("click",function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
}, false);

function savaData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();