function makerear(){

    let changepart = document.getElementById("peranvaihtonappi");
    let partlist = document.getElementById("peralista");
    let currentpart = document.getElementById("Nykypera");

    const partkuvat = [
        "empty.png",
        "rear1.png",
        "rear2.png",
        "rear3.png",
        "rear4.png",
        "rear5.png",
        "rear6.png",
        "rear7.png",
        "rear8.png",
        "rear9.png",
        "rear10.png",
    ];

    let partlaskuri = 0;

    showpart();

function showpart(){
    currentpart.innerHTML = "Current Rear " + partlaskuri;
    partlist.innerHTML = "<div><img src='osat/" + partkuvat[partlaskuri] + "' img class=" +"Rear"+ "></div>";
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
    makerear();
  });