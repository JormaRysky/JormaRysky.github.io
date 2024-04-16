function makeengine(){

    let changepart = document.getElementById("moottorinvaihtonappi");
    let partlist = document.getElementById("moottorilista");
    let currentpart = document.getElementById("Nykymoottori");

    const partkuvat = [
        "empty.png",
        "moottori.png",
        "moottori2.png",
        "moottori3.png",
        "moottori4.png",
        "moottori5.png"
    ];

    let partlaskuri = 0;

    showpart();

function showpart(){
    currentpart.innerHTML = "Current Rear Wheel " + partlaskuri;
    partlist.innerHTML = "<div><img src='osat/" + partkuvat[partlaskuri] + "' img class=" +"Engine"+ "></div>";
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
    makeengine();
  });