function makebumperf(){

    let changepart = document.getElementById("etupuskurinvaihtonappi");
    let partlist = document.getElementById("etupuskurilista");
    let currentpart = document.getElementById("Nykyetupuskuri");

    const partkuvat = [
        "empty.png",
        "etupusk1.png",
        "etupusk2.png",
        "etupusk3.png",
        "etupusk4.png",
        "etupusk5.png",
        "etupusk6.png",
        "etupusk7.png",
        "etupusk8.png",
    ];

    let partlaskuri = 0;

    showpart();

function showpart(){
    currentpart.innerHTML = "Current Front Bumper " + partlaskuri;
    partlist.innerHTML = "<div><img src='osat/" + partkuvat[partlaskuri] + "' img class=" +"BumpF"+ "></div>";
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
    makebumperf();
  });