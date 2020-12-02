window.onload=function() {
    getInfo();
}


function getInfo() {
    let name=sessionStorage.getItem("getName");
    let points=sessionStorage.getItem("point");
    let getting_user_time=sessionStorage.getItem("user_time_taken")
    if(points==null)
    points=0
    let showResult=document.querySelector(".info")
    showResult.innerHTML=` <h1>Player Name : ${name}</h1>
    <br>
    <h1>Your Points : ${points}</h1> <br>
    <h1>${getting_user_time}</h1>
    `
}