function makefuel(){

    let changepart = document.getElementById("panvaihtonappi");
    let partlist = document.getElementById("palista");
    let currentpart = document.getElementById("Nykypa");

    const partkuvat = [
        "empty.png",
        "pa1.png",
        "pa2.png",
        "pa3.png",
        "pa4.png"
    ];

    let partlaskuri = 0;

    showpart();

function showpart(){
    currentpart.innerHTML = "Current Fuel " + partlaskuri;
    partlist.innerHTML = "<div><img src='osat/" + partkuvat[partlaskuri] + "' img class=" +"Fuel"+ "></div>";
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
    makefuel();
  })