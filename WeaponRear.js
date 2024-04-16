function makeweaponr(){

    let changepart = document.getElementById("takaasevaihtonappi");
    let partlist = document.getElementById("takaaselista");
    let currentpart = document.getElementById("Nykytakaase");

    const partkuvat = [
        "empty.png",
        "weaponrear1.png",
        "weaponrear2.png"

    ];

    let partlaskuri = 0;

    showpart();

function showpart(){
    currentpart.innerHTML = "Current Rear Weapon " + partlaskuri;
    partlist.innerHTML = "<div><img src='osat/" + partkuvat[partlaskuri] + "' img class=" +"GunR"+ "></div>";
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
    makeweaponr();
  });