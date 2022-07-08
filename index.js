"use strict";

// 1․ ստեղծում եք ցանկացած թեմատիկային փոքր կոնսոլային հավելված, որը չպետք ա կախում ունենա բրաուզերից

// 2․ ձեր կոնսոլային հավելվածի մեջ օգտագործում եք հետևյալ մեթոդները՝ toUpperCase, toLowerCase, slice, trim, split, join, forEach

// 3. աշխատացնում եք console-ում 

// Հ․Գ․ ցանկալի ա կոնսոլում ֆունկցիա գրվի, արգումենտ փոխանցվի, ու ըստ էդ արգումենտի կատարվեն ներքին մեխանիզմները :)

const diceGame = {
    raund: 0,
    player1: {
        name: "James Bond 007",
        profession: "Spy",
        playExperienceYear: 3,
        pointsOnTheAccount: 0,
        dicesPl1: []
    },
    player2: {
        name: "Le Chiffre",
        profession: "Player",
        playExperienceYear: 10,
        pointsOnTheAccount: 0,
        dicesPl2: []
    },
    throwDice() {
        return Math.floor(Math.random() * (6) + 1);        
    },
    gamePhrases: {
        throwD: `Dear players please throw your dices`,
        raund: "        RaUnD"
    },
    playing() {

        while(this.player1.pointsOnTheAccount < 11 && this.player2.pointsOnTheAccount < 11) {

            let player1Dices = [];
            player1Dices.push(this.throwDice());
            player1Dices.push(this.throwDice());

            let player2Dices = [];
            player2Dices.push(this.throwDice());
            player2Dices.push(this.throwDice());

            console.log(`${diceGame.gamePhrases.raund.toLowerCase().trim()} : ${++this.raund}`);
            let splitStr = diceGame.gamePhrases.throwD.split(" ");
            let joinStr = splitStr.join(" - ");
            console.log(joinStr.toUpperCase());
            console.log();

            console.log(`${diceGame.player1.name.slice(0, 10)} Dices ${player1Dices[0]} : ${player1Dices[1]}`);            
            console.log(`${diceGame.player2.name} Dices ${player2Dices[0]} : ${player2Dices[1]}`);

            let sumOfPl1 = 0;           
            player1Dices.forEach(function(item, i) {
                sumOfPl1 += item;
            });
            let sumOfPl2 = 0;
            player2Dices.forEach(function(item, i) {
                sumOfPl2 += item;
            });

            console.log(`   The sum of dices ${diceGame.player1.name.slice(0, 10)}: ${sumOfPl1} `);
            console.log(`   The sum of dices ${diceGame.player2.name}: ${sumOfPl2} `);

            if(sumOfPl1 > sumOfPl2) {
                this.player1.pointsOnTheAccount += 2;
            } else if(sumOfPl1 < sumOfPl2) {
                this.player2.pointsOnTheAccount += 2;
            } else {
                console.log("Draw");
            }

            console.log(`The sum of points ${diceGame.player1.name.slice(0, 10)} is :  ${diceGame.player1.pointsOnTheAccount}`);
            console.log(`The sum of points ${diceGame.player2.name} is :  ${diceGame.player2.pointsOnTheAccount}`);

            if(this.player1.pointsOnTheAccount > 10) {
                console.log("******************************");
                console.log(`${this.player1.name.slice(0, 10)} win tha game, and he have ${this.player1.pointsOnTheAccount} points`);
                console.log(`${this.player2.name} you can try another time, your points are: ${this.player2.pointsOnTheAccount}`);
            } else if(this.player2.pointsOnTheAccount > 10) {
                console.log("******************************");
                console.log(`${this.player2.name} win tha game, and he have ${this.player2.pointsOnTheAccount} points`);
                console.log(`${this.player1.name.slice(0, 10)} you can try another time, your points are: ${this.player1.pointsOnTheAccount}`);
            }
            
            console.log("******************************");
            console.log();
        }   
    }
};

diceGame.playing();







