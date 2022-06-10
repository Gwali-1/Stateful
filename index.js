"use strict"


const btn = document.querySelector(".send");
const namez = document.querySelector(".person");
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
            console.log(i);
            content+= `<li style = color:red;>${sessionStorage.getItem(`name${i}`)}</li>`;
            console.log(sessionStorage.getItem(`name${i}`));
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


console.log(btn);
btn.addEventListener("click",function (e){
    e.preventDefault()
    sessionStorage.setItem(`name${counter}`,namez.value);
    counter+=1;
    //store each name recieved in sessionStorage to be used to populate in time of  refresh
    sessionStorage.setItem("counter",counter)

    //using text node to insert into document instead of array and innerHtml
    const ele = document.createElement("li")
    ele.style.color = "red"
    const textnode = document.createTextNode(namez.value)
    ele .appendChild(textnode)
    document.querySelector(".people").appendChild(ele)
    
    //reset input field
    namez.value =""
    document.querySelector(".person").setAttribute("autofocus","autofocus");
 
})
