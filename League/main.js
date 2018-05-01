function mainLeague() {
    var num_of_teams = prompt("Please enter the number of teams", "13");
    // var teams = num_of_teams[num_of_teams]
    var teams = [];

    for (let i = 0; i < num_of_teams; i++) {
        teams.push(new Object());
        teams[i].name = prompt("Enter the name of the " + i + " th team");
        teams[i].score = 0;
        teams[i].zade = 0;
        teams[i].khorde = 0;
        teams[i].tafazol = 0;
        teams[i].winner = true;
        // teams[i].assign_team = function(inputTeam){
        //     teams[i].name = inputTeam.name;
        //     teams[i].score = inputTeam.score;
        //     teams[i].zade = inputTeam.zade;
        //     teams[i].khorde = inputTeam.khorde;
        //     teams[i].tafazol = inputTeam.tafazol;
        // };
    }
    var teams_in_table = [];
    
    for (let i = 0; i < teams.length; i++) {
        teams_in_table.push(new Object());
        teams_in_table[teams_in_table.length - 1] = teams[i];
    }

    while (teams_in_table.length != 4) {

        var temp_teams = [2];
        temp_teams[0] = new Object();
        temp_teams[1] = new Object();

        for (let index = 0; index < teams_in_table.length - 1; index + 2) {
            temp_res = my_league.game(teams_in_table[index], teams_in_table[index + 1], 5);
            teams[i] = temp_res[0];
            teams[i + 1] = temp_res[1];
        }

        teams_in_table = my_league.organizer(teams);
    }

    var teams_to_rank = [];

    for (let index = 0; index < teams.length; index++) {
        if (teams[index].winner == false) {
            teams_to_rank.push(new Object());
            teams_to_rank[teams_to_rank.length-1] = teams[index];
        }
    }

    var final_rank = my_league.to_rank(teams_to_rank); // The teams that have been defeated are ranked
    
    for (let index = 0; index < teams_in_table.length - 1; index + 2) { // Semi final games are played
        temp_res = my_league.game(teams_in_table[index], teams_in_table[index + 1], 5);
        teams[i] = temp_res[0];
        teams[i + 1] = temp_res[1]; 
    }

    teams_in_table = my_league.organizer(teams_in_table); //clarifying the finalists
    var semi_final_loosers = [];

    for (let index = 0; index < teams_in_table.length; index++) {
        if (teams_in_table[index].winner == false) {
            semi_final_loosers.push(new Object());
            semi_final_loosers[teams_to_rank.length-1] = teams[index];
        }
    }

    final_rank.unshift(semi_final_loosers); //the third and forth teams are ranked

    if (teams_in_table[0].winner) {         //which team is the champions?
        final_rank.unshift(teams_in_table[1]);
        final_rank.unshift(teams_in_table[0]);
    }else{
        final_rank.unshift(teams_in_table[0]);
        final_rank.unshift(teams_in_table[1]);        
    }

    my_league.print_table(final_rank);
}

var my_league = {
    game: function (t1, t2, goal_range) {
        // var res;
        var num_of_goals_t1 = Math.floor(goal_range + 1 * Math.random());
        var num_of_goals_t2 = Math.floor(goal_range + 1 * Math.random());
        if (num_of_goals_t1 > num_of_goals_t2) {
            t1.zade = t1.zade + num_of_goals_t1;
            t1.khorde = t1.khorde + num_of_goals_t2;
            t1.tafazol = t1.tafazol + num_of_goals_t1 - num_of_goals_t2;
            t1.score = t1.score + 3;
            // res = true;
            t1.winner = true;
            t2.winner = false;
            return [t1, t2];
        } else if (num_of_goals_t2 > num_of_goals_t1) {
            t2.zade = t2.zade + num_of_goals_t2;
            t2.khorde = t2.khorde + num_of_goals_t1;
            t2.tafazol = t2.tafazol + num_of_goals_t2 - num_of_goals_t1;
            t2.score = t2.score + 3;
            t1.winner = false;
            t2.winner = true;
            return [t1, t2];
        }
        else {
            temp_teams = game(t1, t2, 1);
        }
    },

    to_rank: function (inputTeams) {
        for (let index = 0; index < inputTeams.length; index++) {
            for (let jj = 0; jj < inputTeams.length; jj++) {
                if (inputTeams[jj].score < inputTeams[jj + 1].score) {
                    var temp = inputTeams[jj];
                    inputTeams[jj] = inputTeams[jj + 1];
                    inputTeams[jj + 1] = temp;
                }
                else if (inputTeams[jj].score == inputTeams[jj + 1].score) {
                    if (inputTeams[jj].tafazol < inputTeams[jj + 1].tafazol) {
                        var temp = inputTeams[jj];
                        inputTeams[jj] = inputTeams[jj + 1];
                        inputTeams[jj + 1] = temp;
                    }
                }

            }

        }
    },

    organizer: function (inputTeams) {
        table_of_game = [];
        for (let index = 0; index < inputTeams.length; index++) {
            if (inputTeams[index].winner == true) {
                table_of_game.push(new Object());
                table_of_game[table_of_game.length - 1] = inputTeams[index];
            }
        }
        return table_of_game;
    },

    print_table: function (inputTeams) {
        for (let i = 0; i < inputTeams.length; i++) {
            console.log(inputTeams[i].name+"\t"+inputTeams[i].score+"\t"+
            inputTeams[i].zade+"\t"+inputTeams[i].khorde+"\t"+inputTeams[i].tafazol);
        }
    }

}

