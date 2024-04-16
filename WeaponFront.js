function makeweaponf(){

    let changepart = document.getElementById("etuasevaihtonappi");
    let partlist = document.getElementById("etuaselista");
    let currentpart = document.getElementById("Nykyetuase");

    const partkuvat = [
        "empty.png",
        "weaponfront1.png",
        "weaponfront2.png",
        "weaponfront3.png",
        "weaponfront4.png"
    ];

    let partlaskuri = 0;

    showpart();

function showpart(){
    currentpart.innerHTML = "Current Front Weapon " + partlaskuri;
    partlist.innerHTML = "<div><img src='osat/" + partkuvat[partlaskuri] + "' img class=" +"GunF"+ "></div>";
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
    makeweaponf();
  });