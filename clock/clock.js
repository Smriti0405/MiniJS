
let txt1 = document.getElementById("clock");
let txt2 = document.getElementById("date");
// let txt = document.getElementsByTagName("div");

const showTime = () =>{
    
    let t = new Date();
    let h = t.getHours();
    let m = t.getMinutes();
    let s = t.getSeconds();

    let sess;
    if(h>=12){
        sess = "PM"
    }
    else{
        sess = "AM"
    }

    let time = h+":"+m+":"+s+" "+sess
    
    txt1.innerText = time

    let dt = t.getDate();
    let mn = t.getMonth();
    let yr = t.getFullYear();

    let date = dt+"/"+mn+1+"/"+yr
    txt2.innerText = date

    setInterval(showTime,1000)
}

showTime();



