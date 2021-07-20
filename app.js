let tableid = [
    ["A1", "A2", "A3"], 
    ["B1", "B2", "B3"], 
    ["C1", "C2", "C3"]
];

let table = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
let who = true;
let start = true;

let xScore = 1;
let oScore = 1;

let moves = 0;

function win() {
    if(table[0][0] === table[0][1] && table[0][1] === table[0][2] && table[0][1] != null) return(tableid[0][0]);    
    if(table[1][0] === table[1][1] && table[1][1] === table[1][2] && table[1][1] != null) return(tableid[1][0]);
    if(table[2][0] === table[2][1] && table[2][1] === table[2][2] && table[2][1] != null) return(tableid[2][0]);
    if(table[0][0] === table[1][0] && table[1][0] === table[2][0] && table[1][0] != null) return(tableid[0][0]);
    if(table[0][1] === table[1][1] && table[1][1] === table[2][1] && table[1][1] != null) return(tableid[0][1]);
    if(table[0][2] === table[1][2] && table[1][2] === table[2][2] && table[1][2] != null) return(tableid[0][2]);
    if(table[0][0] === table[1][1] && table[1][1] === table[2][2] && table[1][1] != null) return(tableid[0][0]);
    if(table[0][2] === table[1][1] && table[1][1] === table[2][0] && table[1][1] != null) return(tableid[0][2]);
}

function reset() {
    table = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    moves = 0;
    let i = -1;
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            document.getElementById(tableid[x][y]).innerHTML =  table[x][y];
        }
    }

    if(start === true){
        start = false;
        who = false;
    } else {
        who = true;
        start = true;
    }
}

function whose() {
    if(who === true){
        who = false;
        return("<span style=\"color:var(--player1);\">X</span>");
    } else {
        who = true;
        return("<span style=\"color:var(--player2);\">O</span>");
    }
}

function display(x, y, tableid) {
    if(table[x][y] != null) { 
        console.log(table[x][y]);
    } else {
        table[x][y] = whose();
        document.getElementById(tableid).innerHTML =  table[x][y];        
        setTimeout(function(){ 
            var isWin = win();
            console.log(isWin);
            if(isWin != null) {
                alert("Won by player " + document.getElementById(win()).innerText);
                if(document.getElementById(win()).innerHTML == "<span style=\"color:var(--player1);\">X</span>") {
                    document.getElementById("xScore").innerHTML = xScore++;
                } else {
                    document.getElementById("oScore").innerHTML = oScore++;
                }
                reset();
                return;
            }
            moves++;
            if(moves == 9) {
                alert("Draw match");
                reset();
                moves = 0;
            }
        }, 100);  
    }
}