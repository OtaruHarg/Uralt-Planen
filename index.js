var kaset_mode = "read";
var fin = "false";
var sleeptime = 0;
let currentRotation = 0;
var mode_revel = 1;
var waiting = "true";
var change = "minus";

window.onload = start();

async function start(){
    document.getElementById("gamen_start").style.zIndex = 1000;
    document.getElementById("start_button").style.zIndex = 1500;
    const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
    console.log("start");
    while(waiting == "true"){
        await sleep(100);
        console.log("waiting...");
        opasan = document.getElementById("start_button").style.opacity;
        if(change == "plus"){
            document.getElementById("start_button").style.opacity = opasan + 0.1;
            console.log("plus");
        }else{
            document.getElementById("start_button").style.opacity = opasan - 0.1;
            console.log("minus");
        }
        opasan = document.getElementById("start_button").style.opacity;
        if(document.getElementById("start_button").style.opacity == 0){
            change = "plus";
        }else if(document.getElementById("start_button").style.opacity == 1){
            change = "minus";
        }
    }
    document.getElementById("gamen_start").style.zIndex = -100;
    document.getElementById("start_button").style.zIndex = -100;
    loops();
}


function start_next(){
    waiting = "false";
}


async function loops(){
    console.log("we");
    const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
    while(fin != "true"){
        if(kaset_mode == "read"){
            if(mode_revel == 1){
                document.getElementById("loading").textContent = ".. LADEN";
                mode_revel = 2;
            }else if(mode_revel == 2){
                document.getElementById("loading").textContent = ". LADEN.";
                mode_revel = 3;
            }else if(mode_revel == 3){
                document.getElementById("loading").textContent = " LADEN..";
                mode_revel = 4;
            }else if(mode_revel == 4){
                document.getElementById("loading").textContent = "LADEN...";
                mode_revel = 5;
            }else if(mode_revel == 5){
                document.getElementById("loading").textContent = "ADEN... ";
                mode_revel = 6;
            }else if(mode_revel == 6){
                document.getElementById("loading").textContent = "DEN... L";
                mode_revel = 7;
            }else if(mode_revel == 7){
                document.getElementById("loading").textContent = "EN... LA";
                mode_revel = 8;
            }else if(mode_revel == 8){
                document.getElementById("loading").textContent = "N... LAD";
                mode_revel = 9;
            }else if(mode_revel == 9){
                document.getElementById("loading").textContent = "... LADE";
                mode_revel = 1;
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