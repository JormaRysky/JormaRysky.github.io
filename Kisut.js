let lisaa = document.getElementById("lisaysnappi");
let poista = document.getElementById("poistonappi");
let lista = document.getElementById("kisulista");
let kisujenMaara = document.getElementById("kisulaskuri");

const kissakuvat = [
    "kissa_ja_lehtia.png",
    "kisu1.jpg",
    "kissa_laatikossa.png",
    "kisu2.jpg",
    "kissa_syo.png",
    "kisu3.jpg",
    "kissantassu.png",
    "kisu4.jpg"
];

let laskuri = 0;

function naytaKissat(lkm){ 
    kisujenMaara.innerHTML = "Kissojen määrä: " + laskuri; 
    lista.innerHTML = ""; 
    for(let i = 0; i < lkm; i++){ 
        lista.innerHTML += "<div><img src='kuvat/" + kissakuvat[i] + "'></div>";
    }
}


lisaa.addEventListener("click", () => {
    if(laskuri < kissakuvat.length){
        laskuri++;
    }
    else{
        alert("Kaikki kissat ovat jo näkyvissä")
    }
    naytaKissat(laskuri);
});

poista.addEventListener("click", () => {
    if(laskuri > 0){
        laskuri--;
    }
    else{
        alert("Kaikki kissat ovat poissa");
    }
    naytaKissat(laskuri);
});