function makeexhaust(){

    let changepart = document.getElementById("pakovaihtonappi");
    let partlist = document.getElementById("pakolista");
    let currentpart = document.getElementById("Nykypako");
    
    const partkuvat = [
        "empty.png",
        "exhaust1.png",
        "exhaust2.png",
        "exhaust3.png",
        "exhaust4.png",
        "exhaust5.png"
    ];

    let partlaskuri = 0;

    showpart();

function showpart(){
    currentpart.innerHTML = "Current Exhaust " + partlaskuri;
    partlist.innerHTML = "<div><img src='osat/" + partkuvat[partlaskuri] + "' img class=" +"Exhaust"+ "></div>";
}

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
    makeexhaust();
  });









