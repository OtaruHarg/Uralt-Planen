var kaset_mode = "read";
var fin = "false";
var sleeptime = 0;
let currentRotation = 0;

window.onload = loops();

async function loops(){
    console.log("we");
    const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
    while(fin != "true"){
        if(kaset_mode == "read"){
            const box = document.getElementById('box');
            currentRotation += 10;
            console.log("trun");
        }else if(kaset_mode == "fin"){
            document.getElementById("loading").src = "fin.png";
        }
        await sleep(100);
        sleeptime = sleeptime + 1;
        if(sleeptime >= 10){
            console.log("time");
            sleeptime = 0;
        }
    }
}