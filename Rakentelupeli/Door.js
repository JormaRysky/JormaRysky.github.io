function makedoor(){

    let changepart = document.getElementById("ovenvaihtonappi");
    let partlist = document.getElementById("ovilista");
    let currentpart = document.getElementById("Nykyovi");

    const partkuvat = [
        "empty.png",
        "ovi1.png",
        "ovi2.png",
        "ovi3.png",
        "ovi4.png",
        "ovi5.png",
        "ovi6.png",
        "ovi7.png",
        "ovi8.png",
        "ovi9.png",
        "ovi10.png",
        "ovi11.png",
        "ovi12.png",
        "ovi13.png",
    ];

    let partlaskuri = 0;

    showpart();

function showpart(){
    currentpart.innerHTML = "Current Door " + partlaskuri;
    partlist.innerHTML = "<div><img src='osat/" + partkuvat[partlaskuri] + "' img class=" +"Door"+ "></div>";
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
    makedoor();
  });