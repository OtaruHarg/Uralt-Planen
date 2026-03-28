var kaset_mode = "";



window.onload = loops();

function loops(){
    while(fin != "true"){
        if(kaset_mode == "read"){
            document.getElementById("loading").style.transform = "rotate(" + 10 + "deg)";
        }else if(kaset_mode == "fin"){
            document.getElementById("loading").src = "fin.png";
        }
    }
}