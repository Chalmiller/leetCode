//Initially, there is a Robot at position (0, 0).
//Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

//The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right),
//L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

function judgeCircle(moves) {
    var splitMoves = moves.split("");
    var vertical = 0;
    var horizontal = 0;
    for (var i=0; i<splitMoves.length; i++) {
        if (splitMoves[i] === 'U') {
            vertical = (vertical + 1);
        }
        else if (splitMoves[i] === 'D') {
            vertical = (vertical - 1);
        }
        else if (splitMoves[i] === 'R' ) {
            horizontal = (horizontal + 1);
        }
        else if (splitMoves[i] === 'L') {
            horizontal = (horizontal - 1);
        }
    }
    if ("(" + vertical + "," + horizontal + ")" === "(0,0)") {
        return true;
    } else {
        return false;
    }
};