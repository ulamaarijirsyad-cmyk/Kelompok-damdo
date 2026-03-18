// SEARCH HERO
function searchHero() {

let input = document.getElementById("searchHero").value.toLowerCase();

let heroes = document.querySelectorAll(".hero-card");

heroes.forEach(function(hero){

let name = hero.querySelector("h3").textContent.toLowerCase();

if(name.includes(input)){
hero.style.display = "";
}else{
hero.style.display = "none";
}

});

}


// DRAG & DROP HERO TIER

// ambil hero
const heroes = document.querySelectorAll(".hero-card");

// ambil semua area drop (tier + hero pool)
const dropZones = document.querySelectorAll(".tier, .hero-pool");

heroes.forEach(hero => {

hero.setAttribute("draggable", true);

hero.addEventListener("dragstart", function(){
this.classList.add("dragging");
});

hero.addEventListener("dragend", function(){
this.classList.remove("dragging");
});

});


// semua area bisa menerima drop
dropZones.forEach(zone => {

zone.addEventListener("dragover", function(e){
e.preventDefault();
});

zone.addEventListener("drop", function(){

const hero = document.querySelector(".dragging");

if(hero){
this.appendChild(hero);
saveTier();
}

});

});

function saveTier(){

const tiers = document.querySelectorAll(".tier");

let data = [];

tiers.forEach((tier, index) => {

let heroes = tier.querySelectorAll(".hero-card");

let heroNames = [];

heroes.forEach(hero=>{
heroNames.push(hero.querySelector("h3").textContent);
});

data[index] = heroNames;

});

localStorage.setItem("tierData", JSON.stringify(data));

}

function loadTier(){

let saved = localStorage.getItem("tierData");

if(!saved) return;

let data = JSON.parse(saved);

const tiers = document.querySelectorAll(".tier");

data.forEach((heroList, index)=>{

heroList.forEach(name=>{

let hero = [...document.querySelectorAll(".hero-card")].find(h=> 
h.querySelector("h3").textContent === name
);

if(hero){
tiers[index].appendChild(hero);
}

});

});

}

loadTier();