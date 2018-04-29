function mainFunc() {
    var numOfPlayers = prompt("Please enter the number of players!", "5");
    // window.alert(typeof numOfPlayers);
    // console.log(typeof numOfPlayers);
    numOfPlayers = parseInt(numOfPlayers);
    var numOfGames = 3;
    var name;
    // var players = [numOfPlayers];
    players = [];

    for (let i = 0; i < numOfPlayers; i++) {
        players.push(new Object());
    }
    var generatedRand;

    for (let i = 0; i < numOfPlayers; i++) {
        name = prompt("Please enter the name of the player " + i);
        players[i].name = name;
        players[i].score = 0;
        //     window.alert(players[i].name + " " +players[i].score);
    }

    players = toGame(players, numOfGames);

    sort(players);

    for (let p = 0; p < players.length; p++) {
        console.log(players[p].score);
    }

    players = nextRoundDetector(players);
    // document.getElementById("demo").innerHTML = players.length;

}

function sort(inArray) {

    for (let ii = 0; ii < inArray.length; ii++) {
        for (let jj = 0; jj < inArray.length - 1; jj++) {
            if (inArray[jj].score < inArray[jj + 1].score) {
                temp = inArray[jj];
                inArray[jj] = inArray[jj + 1];
                inArray[jj + 1] = temp;
            }
        }
    }
}

function toGame(inputPlayers, numberOfGames) {
    for (let playNumber = 0; playNumber < numberOfGames; playNumber++) {
        for (let player = 0; player < inputPlayers.length; player++) {
            inputPlayers[player].currentSelect = Math.random() * 2;
            generatedRand = Math.random() * 2;
            if (Math.floor(inputPlayers[player].currentSelect) == Math.floor(generatedRand)) {
                inputPlayers[player].score ++;
            }
            console.log("the player "+inputPlayers[player].name+" has played for "+playNumber+"th times");
            console.log("the score of "+inputPlayers[player].name+" is: "+inputPlayers[player].score)
        }
        
    }
    return inputPlayers;
}

function nextRoundDetector(inputArray) {
    
    var ranking = new Array();
    
    for (let i = 0; i < inputArray.length; i++) {
        ranking[i] = ranking.push(new Object());
    }

    if (inputArray[0].score != inputArray[1].score) {
        document.getElementById("winner").innerHTML = "The winner player is: " + players[0].name;
        
        for (let i = 0; i < inputArray.length; i++) {
            // ranking[i].name = inputArray[i].name;
            // ranking[i].score = inputArray[i].score;
            console.log(inputArray[i].name+"\t"+inputArray[i].score);
        }
    }

    else {
        // console.log("Hello my alternative condition!");
        var numOfPrimaryWinners = 0;

        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i].score == inputArray[0].score) {
                numOfPrimaryWinners ++;
            }
            else{
                break;
            }      
        }

        console.log("The number of primary winners is: "+numOfPrimaryWinners)

        // for (let i = inputArray.length - 1; i >= numOfPrimaryWinners; i--) {
        //     ranking[i].name = inputArray[i].name;
        //     ranking[i].score = inputArray[i].score;
        // }
        
        inputArray.splice(numOfPrimaryWinners,inputArray.length-1);
        
        console.log("number of primary winners" + inputArray.length)
        
        inputArray = toGame(inputArray,1)
        sort(inputArray);

        for (let p = 0; p < players.length; p++) {
            console.log(players[p].score);
        }

        nextRoundDetector(inputArray);
    }
    // return ranking;
}