    /*
Step 1: Get pet's name
Step 2: Ask if you want to feed, pet or walk (pet's name) 6 times
Step 3: Feed increases energy by 2
Step 4: Pet increases happiness by 1
Step 5: Walk increases happiness by 2 but decreases energy by 1
Step 6: If the user chooses "walk" but the energy level is 
        currently at zero, do not increase happiness or decrease 
        energy. Instead, alert the following message: "Not enough 
        energy to enjoy a walk." 
Step 7:At the end, after the six actions, log the pet's name,
       happiness, and energy level to the console.
*/

let petName = prompt("What is your pet's name?");

let happiness = 0
let energy = 0
let total = 0;
for (let i = 0; i < 6; i++) {
    let choice = prompt("Would you like to feed, pet or walk?")
    console.log(choice)
    if (choice === "pet") {
        happiness += 1
    }
    else if (choice === "walk") {
        if (energy > 0){
        happiness += 2
        energy -= 1}
        else {
            alert("Not enough energy to enjoy a walk.")
        }
    }
    else if (choice === "feed"){
        energy += 2
    }
}
    
    console.log(petName);
    console.log("happiness " + happiness);
    console.log("energy " + energy);
    console.log(petName + " has " + happiness + " happiness and " + energy + " energy.");
    

