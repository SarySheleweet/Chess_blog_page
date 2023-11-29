import { Chess } from './chess.js'





let config = {
    draggable: true,
    dropOffBoard: 'snapback', // this is the default
    position: 'start'
  }

let board = Chessboard('board3', config)

const chess = new Chess( 
    'r1b2r1k/4qp1p/p2ppb1Q/4nP2/1p1NP3/2N5/PPP4P/2KR1BR1 w - - 0 1'
)

chess.setComment("king's pawn opening")

chess.pgn()

chess.getComments();

// -> "1. e4 {king's pawn opening}"


/* 
const positionsForTheFirstPuzzle = ['r1b2r1k/4qp1p/p2ppb1Q/4nP2/1p1NP3/2N5/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/4qp1p/p1Nppb1Q/4nP2/1p2P3/2N5/PPP4P/2KR1BR1 w - - 0 1',
'r1b2r1k/4qp1p/p1nppb1Q/5P2/1p2P3/2N5/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/4qp1p/p1nppb1Q/4PP2/1p6/2N5/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/4qp1p/p1npp2Q/4PPb1/1p6/2N5/PPP4P/2KR1BR1 w - - 0 1',
'r1b2r1k/4qp1p/p1npp2Q/4PPR1/1p6/2N5/PPP4P/2KR1B2 w - - 0 1']

const alternativeVarForFirstPost = ['r1b2r1k/4qp1p/p2ppb1Q/4nP2/1p6/2N5/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/4qp1p/p2ppb1Q/4nP2/1p2N3/8/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/4qp1p/p2ppbnQ/5P2/1p2N3/8/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/4qp1p/p2ppNnQ/5P2/1p6/8/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/5p1p/p2ppqnQ/5P2/1p6/8/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/5p1p/p2ppqPQ/8/1p6/8/PPP4P/2KR1BR1 w - - 0 1']
const alternativeVarForFirstPost2 = ['r1b2r1k/4qp1p/p1npp2Q/4bP2/1p6/2N5/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/4qp1p/p1nppP1Q/4b3/1p6/2N5/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/4qp1p/p1nppb1Q/8/1p6/2N5/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/4qp1p/p1nppb1Q/8/1p6/2NB4/PPP4P/2KR2R1 w - - 0 1', 'r1b2r1k/4qp1p/p1npp2Q/6b1/1p6/2NB4/PPP4P/2KR2R1 w - - 0 1', 'r1b2r1k/4qp1p/p1npp2Q/6R1/1p6/2NB4/PPP4P/2KR4 w - - 0 1', 'r1b2r1k/4q2p/p1nppp1Q/6R1/1p6/2NB4/PPP4P/2KR4 w - - 0 1', 'r1b2r1k/4q2p/p1nppp1Q/8/1p6/2NB2R1/PPP4P/2KR4 w - - 0 1']
// ... (other code)

const positionForTheSecondPuzzle = ['8/pR4pk/1b2p3/2p3p1/N1p5/7P/PP1r2P1/6K1 b - - 0 1']

let board1 = Chessboard('board1', positionsForTheFirstPuzzle[0]);
let board2 = Chessboard('board2', alternativeVarForFirstPost[0]);
let board3 = Chessboard('board3', alternativeVarForFirstPost2[0]);

let count = 0;
let count3 = 0;

$('#next1').on('click', function () {
    count++;
    if (count < positionsForTheFirstPuzzle.length) {
        board1.position(positionsForTheFirstPuzzle[count], false);
    } else {
        // Perform an action when count is equal to the length of the positions array for board1
    }
});

$('#prev1').on('click', function () {
    count--;
    if (count >= 0) {
        board1.position(positionsForTheFirstPuzzle[count], false);
    } else {
        // Perform an action when count is less than 0 for board1
    }
});

$('#next2').on('click', function () {
    count++;
    if (count < alternativeVarForFirstPost.length) {
        board2.position(alternativeVarForFirstPost[count], false);
    } else {
        // Perform an action when count2 is equal to the length of the alternativeVarForFirstPost array for board2
    }
});

$('#prev2').on('click', function () {
    count--;
    if (count >= 0) {
        board2.position(alternativeVarForFirstPost[count], false);
    } else {
        
    }
});

$('#next3').on('click', function () {
    count++;
    if (count < alternativeVarForFirstPost2.length) {
        board3.position(alternativeVarForFirstPost2[count], false);
    } else {
       
    }
});

$('#prev3').on('click', function () {
    count--;
    if (count >= 0) {
        board3.position(alternativeVarForFirstPost2[count], false);
    } else {
       
    }
}); */




