let minutes=0
let seconds=0
let final_minutes=0;
let final_seconds
let s=document.querySelector(".timmer_span")

let intervel= setInterval(function(){
    
    if(seconds<59){
        seconds++;
    }else {
        minutes++;
        seconds=0;
    }
     final_minutes= minutes<10? `0${minutes}`:`${minutes}`
     final_seconds= seconds<10? `0${seconds}`:`${seconds}`
    s.innerHTML=`${final_minutes} : ${final_seconds}`
},1000)


