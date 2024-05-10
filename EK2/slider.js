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
/*
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

showenvImage(currentenvIndex);*/

//galleria

let currentgalIndex = 0;
 
const galimages = document.querySelectorAll('.galkuva');
const totalgalImages = galimages.length;


const galname = document.getElementById('currentenvtitle');
const galnames = [
"Graveyard",
"Daytime Test",
"Collisions Demo",
"Hurt Effects",
"Awesome Level Design",
"Sea",
"Attack Animation",
"Hot Rods Compared",
"Fog Tech",
"Reflections",
"Level Format from EK - LH",
"Making of Sprites",
"Totally awesome sketches"
,];
const galdescriptions = [
"Post processing test using EK-LH assets                                                                                                                                                  ",
"Test render of fog combined with bright environment                                                                                                                                      ",
"Demonstrations of use of box colliders for achieving true slopes with primitive level format                                                                                             ",
"Demonstration of possible hit effect employing momentary chromatic aberration                                                                                                            ",
"Demonstration of speed run idea the game is built on                                                                                                                                     ",
"Very primitive water simulation                                                                                                                                                          ",
"Player's frame by frame-animated UI-hand                                                                                                                                                 ",
"EK2 car compared against one from EK-LH, which is -just- little bit lower fidelity                                                                                                       ",
"Demonstration of very primitive fog simulation, employing meshes and semialpha textures                                                                                                  ",
"Demonstration of reflections that are actually just duplicated and mirrored meshes                                                                                                       ",
"Level editor of EK-LH during jam was Google Docs. Docs allowed some amount of visualization cause it was possible to give color for numbers, but otherwise it was all visualized in head.",
"Rotoscoping was used for most sprite graphics                                                                                                                                            ",
"made for post jam EK-LH                                                                                                                                                                  "
 ];

function showgalImage(index) {
    galimages.forEach((image, i) => {
      if (i === index) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    })
    document.getElementById("currentgaltitle").innerHTML = "<h3>" + galnames[currentgalIndex] + "</h3>";
    document.getElementById("currentgaldescr").innerHTML = "<h3>" + galdescriptions[currentgalIndex] + "</h3>";
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

  