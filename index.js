var kaset_mode = "read";
var fin = "false";
var sleeptime = 0;

window.onload = loops();



async function loops(){
    const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
    while(fin != "true"){
        if(kaset_mode == "read"){
            document.getElementById("loading").style.transform = "rotate(" + 10 + "deg)";
        }else if(kaset_mode == "fin"){
            document.getElementById("loading").src = "fin.png";
        }
        await sleep(100);
        sleeptime = sleeptime + 1;
        if(sleep >= 10){
            console.assert("time");
            sleeptime = 0;
        }
    }
}