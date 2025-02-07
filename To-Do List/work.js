const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value=== ''){
        alert("Write Something To Add In Your To-Do-List!");
    }
    else{
        let li=document.createElement("li");  //storing element in li
        li.innerHTML=inputBox.value;          //li.innerhtml is text inside li
        listContainer.appendChild(li);       //For Displaying
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
        }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//if refresh is done or browser is closed then the list disappears .So, to store data function is made
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();