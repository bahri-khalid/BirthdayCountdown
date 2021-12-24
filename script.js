const birthday="27 feb 2000";
const date = new Date(birthday);
const days=document.getElementById("days");
const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");
const root= document.querySelector(":root");
let linePercent=0;
function countdown() {
    const today=new Date();
    let birthday= date;
    birthday.setFullYear(today.getFullYear());
    if(today.getTime()>=birthday.getTime()){
        birthday.setFullYear(birthday.getFullYear()+1);
    }
    let timeleft=Math.abs(today.getTime()-birthday.getTime())
    let day=Math.floor(timeleft/(86400*1000));
    let hour=Math.floor(timeleft%(86400*1000)/3600000);
    let minute=Math.floor((timeleft%(86400*1000)%3600000)/60000);
    let second=Math.floor(((timeleft%(86400*1000)%3600000)%60000)/1000);
    days.innerText=day.toString();
    hours.innerText=hour;
    if(hour<10){hours.innerText="0"+hour.toString();}
    minutes.innerText=minute;
    if(minute<10){minutes.innerText="0"+minute.toString();}
    seconds.innerText=second;
    if(second<10){seconds.innerText="0"+second.toString();}
    linePercent=1-((timeleft%(86400*1000)%3600000)%60000)/1000/60;
    if(minute%2==0){
        root.style.setProperty("--left", (1-linePercent)*50+'%');
        root.style.setProperty("--width",linePercent*100+ "%");
    }else{
        root.style.setProperty("--left", (linePercent)*50+'%');
        root.style.setProperty("--width",(1-linePercent)*100+ "%");
    }
    if(day==0 & hour==0){alert("happy birthday khalid!!!")
    }

}
setInterval(countdown,100);