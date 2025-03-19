// Define the warrior objects
const thor = {
    name: 'Thor',
    hp: 100,
    strength: 12,
    attack: function() {
        return Math.floor(Math.random() * this.strength);
    }
};

const zeus = {
    name: 'Zeus',
    hp: 100,
    strength: 10,
    attack: function() {
        return Math.floor(Math.random() * this.strength);
    }
};

// Function to simulate the battle
function battle(warrior1, warrior2) {
    for (let round = 1; round <= 10; round++) {
        console.log(`=== Round ${round} ===`);

        // Warrior 1 attacks Warrior 2
        let damage = warrior1.attack();
        warrior2.hp -= damage;
        console.log(`${warrior1.name} attacks ${warrior2.name} and does ${damage} damage!`);
        console.log(`${warrior1.name} HP: ${warrior1.hp} | ${warrior2.name} HP: ${warrior2.hp}`);

        // Warrior 2 attacks Warrior 1
        damage = warrior2.attack();
        warrior1.hp -= damage;
        console.log(`${warrior2.name} attacks ${warrior1.name} and does ${damage} damage!`);
        console.log(`${warrior1.name} HP: ${warrior1.hp} | ${warrior2.name} HP: ${warrior2.hp}`);
    }

    // Determine the winner
    if (warrior1.hp > warrior2.hp) {
        console.log(`🏆 ${warrior1.name} WINS the battle! 🏆`);
    } else if (warrior2.hp > warrior1.hp) {
        console.log(`🏆 ${warrior2.name} WINS the battle! 🏆`);
    } else {
        console.log("It's a draw!");
    }
}

// Start the battle
battle(thor, zeus);