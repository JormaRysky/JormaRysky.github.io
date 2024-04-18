function makeweapon(){

    let changepart = document.getElementById("asevaihtonappi");
    let partlist = document.getElementById("aselista");
    let currentpart = document.getElementById("Nykyase");

    const partkuvat = [
        "empty.png",
        "weaponroof1.png",
        "weaponroof2.png",
        "weaponroof3.png",
        "weaponroof4.png",
        "weaponroof5.png",
        "weaponroof6.png",
    ];

    let partlaskuri = 0;

    showpart();

function showpart(){
    currentpart.innerHTML = "Current Turret " + partlaskuri;
    partlist.innerHTML = "<div><img src='osat/" + partkuvat[partlaskuri] + "' img class=" +"RoofGun"+ "></div>";
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
    makeweapon();
  });