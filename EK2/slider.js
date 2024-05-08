/*const navi = document.getElementById("navipalkki");
const burger = document.getElementById("hamburger");
burger.addEventListener("click", () => {
    navi.classList.toggle("navi-esiin");
    if(navi.classList.contains("navi-esiin")){
        burger.innerHTML = "&#10005;";
    }
    else{
        burger.innerHTML = "&#9776;";
    }
});*/

//Environments

let currentenvIndex = 0;

const envimages = document.querySelectorAll('.envkuva');
const totalenvImages = envimages.length;


const envname = document.getElementById('currentenvtitle');
const envnames = ["Tar Pits Over The Void", "Finnish Hoaxes", "End Of The World Carnevals","Ghost Canyon"];

function showenvImage(index) {
  envimages.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  })
  document.getElementById("currentenvtitle").innerHTML = "<h3>" + envnames[currentenvIndex] + "</h3>";
}

function prevenvImage() {
  currentenvIndex = (currentenvIndex - 1 + totalenvImages) % totalenvImages;
  showenvImage(currentenvIndex);
}

function nextenvImage() {
  currentenvIndex = (currentenvIndex + 1) % totalenvImages;
  showenvImage(currentenvIndex);
}

showenvImage(currentenvIndex);

//galleria

let currentgalIndex = 0;

const galimages = document.querySelectorAll('.galkuva');
const totalgalImages = galimages.length;


const galname = document.getElementById('currentenvtitle');
const galnames = ["Tar Pits Over The Void", "Finnish Hoaxes", "End Of The World Carnevals","Ghost Canyon"];

function showgalImage(index) {
    galimages.forEach((image, i) => {
      if (i === index) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    })
    document.getElementById("currentgaltitle").innerHTML = "<h3>" + galnames[currentgalIndex] + "</h3>";
  }
  
  function prevgalImage() {
    currentgalIndex = (currentgalIndex - 1 + totalgalImages) % totalgalImages;
    showgalImage(currentgalIndex);
  }
  
  function nextgalImage() {
    currentgalIndex = (currentgalIndex + 1) % totalgalImages;
    showgalImage(currentgalIndex);
  }
  
  showgalImage(currentgalIndex);