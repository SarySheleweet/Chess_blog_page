import { Chess } from './chess.js'

// J'ai crée des tableaux de position pour chaque échiquier en notation FEN.
// J'ai fait plusieurs tableaux pour chaque position pour montrer les coups en commentaire.
//Il existe un option de faire ça avec chess.js mais ce n'est pas pértinent pour ce projet.


const positionsForTheFirstPuzzle = ['r1b2r1k/4qp1p/p2ppb1Q/4nP2/1p1NP3/2N5/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/4qp1p/p1Nppb1Q/4nP2/1p2P3/2N5/PPP4P/2KR1BR1 w - - 0 1',
'r1b2r1k/4qp1p/p1nppb1Q/5P2/1p2P3/2N5/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/4qp1p/p1nppb1Q/4PP2/1p6/2N5/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/4qp1p/p1npp2Q/4PPb1/1p6/2N5/PPP4P/2KR1BR1 w - - 0 1',
'r1b2r1k/4qp1p/p1npp2Q/4PPR1/1p6/2N5/PPP4P/2KR1B2 w - - 0 1']

const alternativeVarForFirstPost = ['r1b2r1k/4qp1p/p2ppb1Q/4nP2/1p6/2N5/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/4qp1p/p2ppb1Q/4nP2/1p2N3/8/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/4qp1p/p2ppbnQ/5P2/1p2N3/8/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/4qp1p/p2ppNnQ/5P2/1p6/8/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/5p1p/p2ppqnQ/5P2/1p6/8/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/5p1p/p2ppqPQ/8/1p6/8/PPP4P/2KR1BR1 w - - 0 1']
const alternativeVarForFirstPost2 = ['r1b2r1k/4qp1p/p1npp2Q/4bP2/1p6/2N5/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/4qp1p/p1nppP1Q/4b3/1p6/2N5/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/4qp1p/p1nppb1Q/8/1p6/2N5/PPP4P/2KR1BR1 w - - 0 1', 'r1b2r1k/4qp1p/p1nppb1Q/8/1p6/2NB4/PPP4P/2KR2R1 w - - 0 1', 'r1b2r1k/4qp1p/p1npp2Q/6b1/1p6/2NB4/PPP4P/2KR2R1 w - - 0 1', 'r1b2r1k/4qp1p/p1npp2Q/6R1/1p6/2NB4/PPP4P/2KR4 w - - 0 1', 'r1b2r1k/4q2p/p1nppp1Q/6R1/1p6/2NB4/PPP4P/2KR4 w - - 0 1', 'r1b2r1k/4q2p/p1nppp1Q/8/1p6/2NB2R1/PPP4P/2KR4 w - - 0 1']


const positionsForTheSecondPuzzle = ['8/pR4pk/1b2p3/2p3p1/N1p5/7P/PP1r2P1/6K1 b - - 0 1', '8/pR4pk/1b2p3/2p3p1/N1p5/7P/Pr4P1/6K1 b - - 0 1', '8/pR4pk/1b2p3/2p3p1/2p5/7P/PN4P1/6K1 b - - 0 1', '8/pR4pk/1b2p3/2p3p1/8/2p4P/PN4P1/6K1 b - - 0 1', '8/p5pk/1R2p3/2p3p1/8/2p4P/PN4P1/6K1 b - - 0 1']
const positionsForSecondPuzzle2 = ['8/p5pk/1R2p3/2p3p1/8/2p4P/PN4P1/6K1 b - - 0 1', '8/p5pk/1R2p3/6p1/2p5/2p4P/PN4P1/6K1 b - - 0 1', '8/p5pk/4p3/6p1/1Rp5/2p4P/PN4P1/6K1 b - - 0 1', '8/6pk/4p3/p5p1/1Rp5/2p4P/PN4P1/6K1 b - - 0 1' ]

const poistionsForThirdPuzzle = ['rn3rk1/pbppq1pp/1p3b2/4N2Q/3PN3/3B4/PPP2PPP/R3K2R w - - 0 1', 'rn3rk1/pbppq1pQ/1p3b2/4N3/3PN3/3B4/PPP2PPP/R3K2R w - - 0 1', 'rn3r2/pbppq1pk/1p3b2/4N3/3PN3/3B4/PPP2PPP/R3K2R w - - 0 1', 'rn3r2/pbppq1pk/1p3N2/4N3/3P4/3B4/PPP2PPP/R3K2R w - - 0 1', 'rn3r2/pbppq1p1/1p3N1k/4N3/3P4/3B4/PPP2PPP/R3K2R w - - 0 1', 'rn3r2/pbppq1p1/1p3N1k/8/3P2N1/3B4/PPP2PPP/R3K2R w - - 0 1', 'rn3r2/pbppq1p1/1p3N2/6k1/3P2N1/3B4/PPP2PPP/R3K2R w - - 0 1', 'rn3r2/pbppq1p1/1p3N2/6k1/3P2NP/3B4/PPP2PP1/R3K2R w - - 0 1', 'rn3r2/pbppq1p1/1p3N2/8/3P1kNP/3B4/PPP2PP1/R3K2R w - - 0 1',
'rn3r2/pbppq1p1/1p3N2/8/3P1kNP/3B2P1/PPP2P2/R3K2R w - - 0 1', 'rn3r2/pbppq1p1/1p3N2/8/3P2NP/3B1kP1/PPP2P2/R3K2R w - - 0 1', 'rn3r2/pbppq1p1/1p3N2/8/3P2NP/5kP1/PPP1BP2/R3K2R w - - 0 1','rn3r2/pbppq1p1/1p3N2/8/3P2NP/6P1/PPP1BPk1/R3K2R w - - 0 1', 'rn3r2/pbppq1p1/1p3N2/8/3P2NP/6P1/PPP1BPkR/R3K3 w - - 0 1', 'rn3r2/pbppq1p1/1p3N2/8/3P2NP/6P1/PPP1BP1R/R3K1k1 w - - 0 1', 'rn3r2/pbppq1p1/1p3N2/8/3P2NP/6P1/PPPKBP1R/R5k1 w - - 0 1' ]


const positionsForFourthPuzzle = ['1B6/8/7P/4p3/3b3k/8/8/2K5 w - - 0 1', '8/B7/7P/4p3/3b3k/8/8/2K5 w - - 0 1', '8/B7/7P/4p3/7k/8/8/b1K5 w - - 0 1', '8/B7/7P/4p3/7k/8/8/bK6 w - - 0 1', '8/B7/7P/4p3/7k/2b5/8/1K6 w - - 0 1', '8/B7/7P/4p3/7k/2b5/2K5/8 w - - 0 1', '8/B7/7P/4p3/7k/8/2K5/b7 w - - 0 1', '8/8/7P/4p3/3B3k/8/2K5/b7 w - - 0 1']
const positionsForFourthPuzzle2 = ['8/8/7P/4p3/3b3k/8/2K5/8 w - - 0 1', '8/8/7P/4p3/3b3k/3K4/8/8 w - - 0 1', '8/8/7P/4p3/7k/3K4/8/b7 w - - 0 1', '8/8/7P/4p3/4K2k/8/8/b7 w - - 0 1']


// definir les plateau avec leurs équivalent en HTML
// J'ai utilise un des types de data proposé par chessbaord.js. c'est un fonction qui accepte un objet comme parameteres avec plein d'options possible
// Pour ce projet d'affichage de plateau, j'avais besoin que de ce type de fonction et data mais j'ai quand même découvert d'autre options dcumenter ici https://chessboardjs.com/docs  

let board1 = Chessboard('board1', {
    moveSpeed: 'slow',
    position: positionsForTheFirstPuzzle[0],
});

let board2 = Chessboard('board2', {
    moveSpeed: 'slow',
    position: alternativeVarForFirstPost[0],
});

let board3 = Chessboard('board3', {
    moveSpeed: 'slow',
    position: alternativeVarForFirstPost2[0],
});
let board4 = Chessboard('board4', {
    moveSpeed: 'slow',
    position: positionsForTheSecondPuzzle[0],
});
let board5 = Chessboard('board5', {
    moveSpeed: 'slow',
    position: positionsForSecondPuzzle2[0],
});
let board6 = Chessboard('board6', {
    moveSpeed: 'slow',
    position: poistionsForThirdPuzzle[0],
});
let board7 = Chessboard('board7',{
    moveSpeed: 'slow',
    position: positionsForFourthPuzzle[0],
});
let board8 = Chessboard('board8', {
    moveSpeed : 'slow',
    position: positionsForFourthPuzzle2[0],
});

// Initialiser une variable pour l'gérer les index de chaque tableau de positions.
        // J'ai fait une variable pour chaque button pour le code soit stable et éviter des probléms de valeurs de variable count.

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;


// 

$('#next1').on('click', function () {
// cette ligne de JQuery remplace document.querySelector('#prev1').addEventListener('click', function() {})
    count1++; // Le click incremente la variable count pour passer à la prochaine position.
    if (count1 < positionsForTheFirstPuzzle.length) { // On vérifie si count est toujour moins ou égale à la longeur de tableau.
        board1.position(positionsForTheFirstPuzzle[count1], false); // Autant que 'true' on affiche la position avec l'index count.
        // le false dans ce code appartient à la librairie Chessboard.js. Il est utilisé pour dire que le Boolean (isGameOver) n'est pas true alors le jeu continue.
    } else {
        // Fait rien si count est égale à la longeur de tableau de position pour chaque plateau.
    }
});

$('#prev1').on('click', function () {
    
    count1--;
    if (count1 >= 0) {
        board1.position(positionsForTheFirstPuzzle[count1], false);
    } else {
    }
});

$('#next2').on('click', function () {
    count2++;
    if (count2 < alternativeVarForFirstPost.length) {
        board2.position(alternativeVarForFirstPost[count2], false);
    } else {
    }
});

$('#prev2').on('click', function () {
    count2--;
    if (count2 >= 0) {
        board2.position(alternativeVarForFirstPost[count2], false);
    } else {
        
    }
});

$('#next3').on('click', function () {
    count3++;
    if (count3 < alternativeVarForFirstPost2.length) {
        board3.position(alternativeVarForFirstPost2[count3], false);
    } else {
       
    }
});

$('#prev3').on('click', function () {
    count3--;
    if (count3 >= 0) {
        board3.position(alternativeVarForFirstPost2[count3], false);
    } else {
       
    }
});


$('#next4').on('click', function () {
    count4++;
    if (count4 < positionsForTheSecondPuzzle.length) {
        board4.position(positionsForTheSecondPuzzle[count4], false);
    } else {
       
    }
});

$('#prev4').on('click', function () {
    count4--;
    if (count4 >= 0) {
        board4.position(positionsForTheSecondPuzzle[count4], false);
    } else {
       
    }
});

$('#next5').on('click', function () {
    count5++;
    if (count5 < positionsForSecondPuzzle2.length) {
        board5.position(positionsForSecondPuzzle2[count5], false);
    } else {
       
    }
});

$('#prev5').on('click', function () {
    count5--;
    if (count5 >= 0) {
        board5.position(positionsForSecondPuzzle2[count5], false);
    } else {
       
    }
});


$('#next6').on('click', function () {
    count6++;
    if (count6 < poistionsForThirdPuzzle.length) {
        board6.position(poistionsForThirdPuzzle[count6], false);
    } else {
       
    }
});

$('#prev6').on('click', function () {
    count6--;
    if (count6 >= 0) {
        board6.position(poistionsForThirdPuzzle[count6], false);
    } else {
       
    }
});


$('#next7').on('click', function () {
    count7++;
    if (count7 < positionsForFourthPuzzle.length) {
        board7.position(positionsForFourthPuzzle[count7], false);
    } else {
       
    }
});

$('#prev7').on('click', function () {
    count7--;
    if (count7 >= 0) {
        board7.position(positionsForFourthPuzzle[count7], false);
    } else {
       
    }
});


$('#next8').on('click', function () {
    count8++;
    if (count8 < positionsForFourthPuzzle2.length) {
        board8.position(positionsForFourthPuzzle2[count8], false);
    } else {
       
    }
});

$('#prev8').on('click', function () {
    count8--;
    if (count8 >= 0) {
        board8.position(positionsForFourthPuzzle2[count8], false);
    } else {
       
    }
});




