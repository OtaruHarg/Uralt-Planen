var kaset_mode = "read";
var fin = "false";
var sleeptime = 0;
let currentRotation = 0;
var mode_revel = 0;

window.onload = loops();

async function loops(){
    console.log("we");
    const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
    while(fin != "true"){
        if(kaset_mode == "read"){
            if(mode_revel == 1){
                document.getElementById("loading").textContent = ".. LADEN";
            }else if(mode_revel == 2){
                document.getElementById("loading").textContent = ". LADEN.";
            }else if(mode_revel == 3){
                document.getElementById("loading").textContent = " LADEN..";
            }else if(mode_revel == 4){
                document.getElementById("loading").textContent = "LADEN...";
            }else if(mode_revel == 5){
                document.getElementById("loading").textContent = "ADEN... ";
            }else if(mode_revel == 5){
                document.getElementById("loading").textContent = "DEN... L";
            }else if(mode_revel == 5){
                document.getElementById("loading").textContent = "EN... LA";
            }else if(mode_revel == 5){
                document.getElementById("loading").textContent = "N... LAD";
            }else if(mode_revel == 5){
                document.getElementById("loading").textContent = "... LADE";
            }
        }else if(kaset_mode == "fin"){
            document.getElementById("loading").src = "fin.png";
        }
        await sleep(500);
        sleeptime = sleeptime + 1;
        if(sleeptime >= 10){
            console.log("time");
            sleeptime = 0;
        }
    }
}