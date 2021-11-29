
//get user input
var playerName=window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney=10;

if (playerHealth > 0) {
    console.log ("Your player is still alive!");
}

//you can also log multiple values at once like this
console.log(playerName, playerHealth, playerAttack);

var enemyName="Roborto";
var enemyHealth=50;
var enemyAttack=12;
var promptFight=window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

var fight=function(){

    if (promptFight === "fight" || promptFight === "FIGHT")  {
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

        enemyHealth=enemyHealth-playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } 
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth=playerHealth-enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        // check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        } 
        else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        //if player chooses to skip
    }  
    else if (promptFight === "skip" || promptFight === "SKIP"){
        //confirm player wants to skip
        var confirmSkip=window.confirm("Are you sure you want to quit?")

        //if yes (ytrue), leave fight
        if (confirmSkip){
            window.alert(playerName + " has chosed to skip the fight. Goodbye!");
            //subtract money from playermoney for quitting
            playerMoney=playerMoney-2;
        }
        //if nom (false), ask question again by rinning fight() again
        else {
            fight();
        }
    }
    else {
        window.alert("You need to choose the vali option. Try again!");
    }

    

  
    
    
    
};

fight();

