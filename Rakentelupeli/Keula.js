function makenose(){

    let changepart = document.getElementById("keulanvaihtonappi");
    let partlist = document.getElementById("keulalista");
    let currentpart = document.getElementById("Nykykeula");

    const partkuvat = [
        "empty.png",
        "keula1.png",
        "keula2.png",
        "keula4.png",
        "keula5.png",
        "keula6.png",
        "keula7.png",
        "keula8.png",
        "keula9.png",
        "keula10.png",
        "keula11.png",
    ];

    let partlaskuri = 0;

    showpart();

function showpart(){
    currentpart.innerHTML = "Current Nose " + partlaskuri;
    partlist.innerHTML = "<div><img src='osat/" + partkuvat[partlaskuri] + "' img class=" +"Nose"+ "></div>";
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
    makenose();
  });

