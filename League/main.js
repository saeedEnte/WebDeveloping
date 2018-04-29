function mainLeague() {
    var num_of_teams = prompt("Please enter the number of teams","13");
    // var teams = num_of_teams[num_of_teams]
    var teams = [];
    
    for (let i = 0; i < num_of_teams; i++) {
        teams.push(new Object());
        teams[i].name = prompt("Enter the name of the " + i + " th team");
        teams[i].score = 0;
        teams[i].zade = 0;
        teams[i].khorde = 0;
        teams[i].tafazol = 0;
        // teams[i].assign_team = function(inputTeam){
        //     teams[i].name = inputTeam.name;
        //     teams[i].score = inputTeam.score;
        //     teams[i].zade = inputTeam.zade;
        //     teams[i].khorde = inputTeam.khorde;
        //     teams[i].tafazol = inputTeam.tafazol;
        // };
    }

    var temp_teams = [3];
    temp_teams[0] = new Object();
    temp_teams[1] = new Object();

    for (let index = 0; index < num_of_teams-1; index+2) {
        temp_res = my_league.game(teams[index],teams[index+1],5);
        teams[i] = temp_res[0];
    }
}

var my_league = {
    game: function (t1,t2,goal_range) {
        // var res;
        var num_of_goals_t1 = Math.floor(goal_range+1 * Math.random());
        var num_of_goals_t2 = Math.floor(goal_range+1 * Math.random());
        if (num_of_goals_t1 > num_of_goals_t2) {
            t1.zade = t1.zade + num_of_goals_t1;
            t1.khorde = t1.khorde + num_of_goals_t2;
            t1.tafazol = t1.tafazol + num_of_goals_t1 - num_of_goals_t2;
            t1.score = t1.score + 3;
            // res = true;
            return [t1,t2,true];
        } else if (num_of_goals_t2 > num_of_goals_t1) {
            t2.zade = t2.zade + num_of_goals_t2;
            t2.khorde = t2.khorde + num_of_goals_t1;
            t2.tafazol = t2.tafazol + num_of_goals_t2 - num_of_goals_t1;
            t2.score = t2.score + 3;
            return [t1,t2,false];
        } 
        else{
            temp_teams = game(t1,t2,1);
        }
    },
    
    to_rank: function (inputTeams){
        for (let index = 0; index < inputTeams.length; index++) {
            for (let jj = 0; jj < inputTeams.length; jj++) {
                if (inputTeams[jj].score < inputTeams[jj+1].score) {
                    var temp = inputTeams[jj];
                    inputTeams[jj] = inputTeams[jj+1];
                    inputTeams[jj+1] = temp;
                }
                else if(inputTeams[jj].score == inputTeams[jj+1].score){
                    if (inputTeams[jj].tafazol < inputTeams[jj+1].tafazol) {
                        var temp = inputTeams[jj];
                        inputTeams[jj] = inputTeams[jj+1];
                        inputTeams[jj+1] = temp;
                    }
                }
                
            };
            
        }
    },

}

