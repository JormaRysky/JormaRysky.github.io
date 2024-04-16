function makewheelr(){

    let changepart = document.getElementById("takarenkvaihtonappi");
    let partlist = document.getElementById("takarenklista");
    let currentpart = document.getElementById("Nykytakarenk");

    const partkuvat = [
        "empty.png",
        "rengastaka1.png",
        "rengastaka2.png",
        "rengastaka3.png",
        "rengastaka4.png",
        "rengastaka5.png",
        "rengastaka7.png",
        "rengastaka8.png",
        "rengastaka9.png",
        "rengastaka10.png",
        "rengastaka11.png",
        "rengastaka12.png",
    ];

    let partlaskuri = 0;

    showpart();

function showpart(){
    currentpart.innerHTML = "Current Rear Wheel " + partlaskuri;
    partlist.innerHTML = "<div><img src='osat/" + partkuvat[partlaskuri] + "' img class=" +"WHRear"+ "></div>";
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
    makewheelr();
  });