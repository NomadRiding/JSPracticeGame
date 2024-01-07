let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = [];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const goldText = document.querySelector("#goldText");

// Below is the portion of RPS (Rock Paper Scissors)

let userGuess;
let play;
let computerChoice;