function makebumperr(){

    let changepart = document.getElementById("takapuskurinvaihtonappi");
    let partlist = document.getElementById("takapuskurilista");
    let currentpart = document.getElementById("Nykytakapuskuri");

    const partkuvat = [
        "empty.png",
        "takapusk1.png",
        "takapusk2.png",
        "takapusk3.png",
        "takapusk4.png"
    ];

    let partlaskuri = 0;

    showpart();

function showpart(){
    currentpart.innerHTML = "Current Rear Bumper " + partlaskuri;
    partlist.innerHTML = "<div><img src='osat/" + partkuvat[partlaskuri] + "' img class=" +"BumpR"+ "></div>";
}

document.addEventListener("DOMContentLoaded", function() {
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
    makebumperr();
  });