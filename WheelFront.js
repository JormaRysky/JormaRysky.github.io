function makewheelf(){

    let changepart = document.getElementById("eturenkvaihtonappi");
    let partlist = document.getElementById("eturenklista");
    let currentpart = document.getElementById("Nykyeturenk");

    const partkuvat = [
        "empty.png",
        "rengasetu1.png",
        "rengasetu2.png",
        "rengasetu3.png",
        "rengasetu4.png",
        "rengasetu5.png",
        "rengasetu6.png",
        "rengasetu7.png",
        "rengasetu8.png",
        "rengasetu9.png",
        "rengasetu10.png",
        "rengasetu11.png"
    ];

    let partlaskuri = 0;

    showpart();

function showpart(){
    currentpart.innerHTML = "Current Front Wheel " + partlaskuri;
    partlist.innerHTML = "<div><img src='osat/" + partkuvat[partlaskuri] + "' img class=" +"WhFR"+ "></div>";
}

document.addEventListener("DOMContentLoaded", function() {
    makewheelf();
    showpart();

  });

changepart.addEventListener("click", () => 
{
    if(partlaskuri < partkuvat.length-1){
        partlaskuri++;
    }
    else{
        partlaskuri = 0;
    }
    showpart();
})
}

document.addEventListener("DOMContentLoaded", function() {
    makewheelf();
  });