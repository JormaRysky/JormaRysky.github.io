function makeroof(){

    let changepart = document.getElementById("katonvaihtonappi");
    let partlist = document.getElementById("kattolista");
    let currentpart = document.getElementById("Nykykatto");

    const partkuvat = [
        "empty.png",
        "roof1.png",
        "roof2.png",
        "roof3.png",
        "roof4.png",
        "roof5.png",
        "roof6.png",
        "roof7.png",
        "roof8.png",
    ];

    let partlaskuri = 0;

    showpart();

function showpart(){
    currentpart.innerHTML = "Current Roof " + partlaskuri;
    partlist.innerHTML = "<div><img src='osat/" + partkuvat[partlaskuri] + "' img class=" +"Roof"+ "></div>";
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
    makeroof();
  });