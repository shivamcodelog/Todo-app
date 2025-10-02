const text=document.getElementById("text");
const listcontainer=document.getElementById("list-container");
function addTask(){
    if(text.value === ''){
        alert("You have to write something!")
    }
    else{
        let li=document.createElement("li");
        li.textContent=text.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span")
            // span.innerHTML=URL(checked.svg)
        li.appendChild(span)
    }
    text.value='';
    save();

 }


 text.addEventListener("keydown", (event) => {
        if (event.key === 'Enter'){
                    addTask()
        }})

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        save();
    }
},false);

function save(){
    localStorage.setItem("data",listcontainer.innerHTML)
}

function showdata(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showdata()
