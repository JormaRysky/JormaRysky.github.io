function makesuspension(){

    let changepart = document.getElementById("jousituksenvaihtonappi");
    let partlist = document.getElementById("jousituslista");
    let currentpart = document.getElementById("Nykyjousitus");
    
    const partkuvat = [
        "empty.png",
        "suspension1.png",
        "suspension2.png",
        "suspension3.png",
        "suspension4.png"
    ];

    let partlaskuri = 0;

    showpart();

function showpart(){
    currentpart.innerHTML = "Current Suspension " + partlaskuri;
    partlist.innerHTML = "<div><img src='osat/" + partkuvat[partlaskuri] + "' img class=" +"Suspension"+ "></div>";
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
    makesuspension();
  });