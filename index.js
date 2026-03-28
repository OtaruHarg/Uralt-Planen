var kaset_mode = "";
var fin = "false";


window.onload = loops();

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));//timeはミリ秒

async function loops(){
    while(fin != "true"){
        if(kaset_mode == "read"){
            document.getElementById("loading").style.transform = "rotate(" + 10 + "deg)";
        }else if(kaset_mode == "fin"){
            document.getElementById("loading").src = "fin.png";
        }
        await sleep(100);
    }
}