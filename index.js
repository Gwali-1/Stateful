"use strict"


const btn = document.querySelector(".send");
const namez = document.querySelector(".person");
const formElem = document.querySelector(".testa");
let content = ``;
let takeAway;

const populate =  function (data){
    document.querySelector(".people").innerHTML = data

}


const boot = function(){

    if(sessionStorage.IsThisFirstTime_Log_From_LiveServer){
        takeAway = 2;
    }
    else{
        takeAway = 1;
    }

    if (sessionStorage){
        for(let i = 0 ; i <  sessionStorage.length-takeAway ; i++){
            content+= `<li style = color:red;>${sessionStorage.getItem(`name${i}`)}</li>`;
        }
        populate(content);    
    }
}




boot();

//
let counter;
if (sessionStorage.getItem("counter")){
    counter = Number(sessionStorage.getItem("counter"))
}else{
    counter = 0;
}

//
btn.addEventListener("click",function (e){
    e.preventDefault()
    sessionStorage.setItem(`name${counter}`,namez.value);
    counter+=1;
    sessionStorage.setItem("counter",counter)
    const ele = document.createElement("li")
    ele.style.color = "red"
    const textnode = document.createTextNode(namez.value)
    ele .appendChild(textnode)
    document.querySelector(".people").appendChild(ele)
    namez.value =""
    document.querySelector(".person").setAttribute("autofocus","autofocus");
})


formElem.onsubmit = (e)=>{
    e.preventDefault();
    let data = new FormData(formElem);
    console.log(`name are ${data.get("f")} and ${data.get("l")}`);
}