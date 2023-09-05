let array = [
    "el1",
    "el2",
    "el3",
    "el4",
    "el5",
    "el6",
    "el7",
    "el8",
    "el9",
    "el10",
]



array.pop();

array.push("el11");

array.concat(2,0);
array.concat(6,0);

console.log(array);

//////

let sagn = "dette er index 5";

let element= array[5];

console.log(sagn + element);

///////

let SuperMarioBros = [
  {
    name: "Mario",
    PowerUp: ["Shroom", "Star", "Coin"],
    enemy: "Bowser",
  },
  {
    name: "Luigi",
    PowerUp: "Dasy",
    enemy: "Waluigi",
  },
  {
    name: "Toad",
    PowerUp: "Cake",
    enemy: "Goomba",
  },
];

for (let i = 0; i < SuperMarioBros.length; i++) {
  console.log(SuperMarioBros[i]);
}
////

let moneyAmount = 1;
let requiredMoneyAmont = 25;
let lostMoney = false;
tryToByFood();

function tryToByFood() {
    if (moneyAmount === requiredMoneyAmont) {
        console.log("Money" + moneyAmount + ". Bying Food");
        ByingFood();
    }   else if (moneyAmount > requiredMoneyAmont) {
        console.log("you got regjected by the cashier :(");

    }
    console.log(
        "shit you lost your money: #222; color: #ff0000");
        

}