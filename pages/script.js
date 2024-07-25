let word = document.getElementById("word"),
    btnset = document.getElementById("btn-set"),
    res = document.getElementById("form"),
    text = document.getElementById("text"),
    result = document.getElementById("score"),
    sets = document.getElementById("sets"),
    timing = document.getElementById("time"),
    gameover = document.getElementById("game-over"),
    hard = document.getElementById("level");

 let easylevel =[
    "app",
    "ball",
    "cup",
    "cat",
    "ant",
    "an",
    "man",
    "don",
    "life",
    "easy",
    "find",
    "hint",
    "link",
    "do",
    "does",
    "dunk",
    "dry",
    "bite",
    "bit",
    "bun",
    "boy",
    "arm",
    "aero",
    "arc",
    "egg",
    "east",
    "fish",
    "fry",
    "for",
    "from",
    "farm",
    "fist",
    "go",
    "gone",
    "hi",
    "jug",
    "ket",
    "leg",
    "net",
    "car",
    "bug"
 ];


let mediumlevel = [
   "Lacking",
   "Address",
   "Circulation",
   "Oximoron",
   "Chocolate",
   "Institute",
   "Medium",
   "Leather",
   "Nigeria",
   "Competence",
   "Commercial",
   "Bootstrap",
   "JQuery",
   "Hyper",
   "Programming",
   "Script",
   "Flagabastic",
   "Onomatopoeia",
   "Encyclopedianism",
   "Xotropeniame",
   "Gangatic",
   "Kilimanjaro"
];


let hardlevel = [
   
   "Kuramantialismatication",
   "Attukuriy-izalajibwis",
   "Mygonamyguwa",
   "Tentenismaticant",
   "Turawamusation",
   "Bouncingspringism",
   "Juwairiyyanamygo",
   "Kwaloinakwala",
   "Ogayaksonmamanakwala",
   "Alhajikashinmiya",
   "Danabujanakwarbai",
   "Isagubuchinaemmata",
   "kwajaloyusufc++",
   "dogobahankalialuta",
   "girmabawayaudanizala",
   "Fauziyanakoko",
   "yeskonationismantica",
   "classreptalbibu",
   "tandamamusapastor",
   "haukargisuleimannispi",
   "bestiebashing",
   "escanoahmadiary",
   "klegmainatfromlagos",
   "wakanda247adeizabigboi",
   "babanyellowinspecta",
   "ecowassaifullahidpo",
   "pascallitonnareimminni",
   "letusmeetinepisode2"
];

 let timeInterval = setInterval(timeTack, 1000);

 let allWord, total = 0, time = 20, level = localStorage.getItem("level") !== null ? localStorage.getItem("level") : "medium";

 function character(){
    if (level === "easy") {
       return easylevel[Math.floor(Math.random() * easylevel.length)];
   }
   if (level === "medium"){
       return mediumlevel[Math.floor(Math.random() * mediumlevel.length)];
   }
    
    if (level === "hard") {
       return hardlevel[Math.floor(Math.random() * hardlevel.length)];
    }
 } 


 function totalScore(){
    total++;
    result.innerHTML = total;
 }

 function wordsPower(){
    allWord = character();
    word.innerHTML = allWord;
 }

 function timeTack(){
    time--;
    timing.innerHTML = time + "s";
      if (time < 4) {
         timing.style = "color: red";     
      } else {
         timing.style = "color: white";
      }
    if (time === 0 ) {
        clearInterval(timeInterval);
        endGame();
 }
 }


 function endGame(){
   if (total >= 10) {
      gameover.innerHTML =
      `<p><i class="bi bi-emoji-laughing-fill" style="color: green;font-size: 4em;"></i></p>
      <h1> Game Over</h1>
      <p>total score is: ${total}</p>
      <button onclick="history.go(0)">Retry</button>`;

      gameover.style = "display: flex";
   } 

   if(total < 10){
      gameover.innerHTML =
      `<p><i class="bi bi-emoji-neutral" style="color: blue;font-size: 4em;"></i></p>
      <h1> Game Over</h1>
      <p>total score is: ${total}</p>
      <button onclick="history.go(0)">Retry</button>`;

      gameover.style = "display: flex"
   } 

   if (total < 3) {
      gameover.innerHTML =
      `<p><i class="bi bi-emoji-frown" style="color: red;font-size: 4em;"></i></p>
      <h1> Game Over</h1>
      <p>total score is: ${total}</p>
      <button onclick="history.go(0)">Retry</button>`;

      gameover.style = "display: flex"
   }
   
 }


 btnset.addEventListener("click", () =>{
    sets.classList.toggle("hide")
 });


 text.addEventListener("input" , (e) => {
    const insertedText = e.target.value;
    if (insertedText === allWord) {
        e.target.value = "";
        wordsPower();
        totalScore();
        if (level === "hard") time += 3;
        else if(level === "medium") time+=4;
        else time += 6;
        timeTack();
    }
 });

 hard.value = level;
 wordsPower();
 text.focus;


 res.addEventListener("change", (e) =>{
    level = e.target.value;
    localStorage.setItem("level", level);
 })