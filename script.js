let positions = ["position1","position2","position3","position4","position5","position6","position7","position8","position9","position10","position11","position12","position13","position14","position15","position16"]

let tempPositions = positions.slice();


for (let i = 0; i < positions.length-1; i++) {
    let tile = document.getElementById("tile-" + (i+1));
    let ranNum =  Math.floor(Math.random() * tempPositions.length);
    tile.classList.add(tempPositions[ranNum]);
    tempPositions.splice(ranNum, 1);    
}

let freeTile = tempPositions[0];

let freeNumber = parseInt(freeTile.match(/\d+/)[0], 10);

function move(element) {
    let classList = document.getElementById(element.id).classList;

    const positionNum = parseInt(classList[1].match(/\d+/)[0], 10);

    let up = true;
    let down = true;
    let left = true;
    let right = true;

    if(positionNum ==  1 || positionNum ==  2 || positionNum ==  3 || positionNum ==  4) {
        up = false;
    }
    if(positionNum ==  1 || positionNum ==  5 || positionNum ==  9 || positionNum ==  13) {
        left = false;
    }
    if(positionNum ==  4 || positionNum ==  8 || positionNum ==  12 || positionNum ==  16) {
        right = false;
    }
    if(positionNum ==  13 || positionNum ==  14 || positionNum ==  15 || positionNum ==  16) {
        down = false;
    }

    if ((positionNum-4 == freeNumber && up) || (positionNum-1 == freeNumber && left) || 
        (positionNum+1 == freeNumber && right) || (positionNum+4 == freeNumber && down)) {
            document.getElementById(element.id).classList.remove("position" + positionNum);
            document.getElementById(element.id).classList.add("position" + freeNumber);
            freeNumber = positionNum
    };
}

function solvePuzzle() {
    let classList;

    for (let i = 1; i < 16; i++) {
        classList = document.getElementById("tile-" + i).classList;
        document.getElementById("tile-" + i).classList.remove(classList[1]);
        document.getElementById("tile-" + i).classList.add("position" + i);
        freeNumber = 16;
    }
}

function flip() {
    for (let i = 1; i < 17; i++) {
        document.getElementById("tile-" + i).classList.toggle("flip");  
    }
}