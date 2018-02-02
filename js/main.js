const N = 3;
let queenPositions = new Array(N);

nQueen();

function nQueen() {
  setQueens();
  console.log(queenPositions);
  searchQueens(0);

  // console.log(queenPositions);
}

function setQueens() {
  // queenPositions.push(0);
  for ( let i = 0; i < N; i++ ) {
    queenPositions[i] = i;
  }
}

function searchQueens(i) {
  if ( i === N ) {
    console.log(queenPositions);
    return;
  }
  let tmp;
  for ( j = 0; j < N; j++ ) {
    tmp = queenPositions[i];
    queenPositions[i] = queenPositions[j];
    queenPositions[j] = tmp;
    searchQueens(i + 1);
    tmp = queenPositions[i];
    queenPositions[i] = queenPositions[j];
    queenPositions[j] = tmp;
  }
}



// nQueen(8);
//
// function nQueen(n) {
//   let queenPositions = [];
//   setQueens(queenPositions, n);
//   searchQueens(queenPositions, n, 0);
//   // console.log(queenPositions);
// }
//
// function setQueens(queenPositions, n) {
//   // queenPositions.push(0);
//   for ( let i = 0; i < n; i++ ) {
//     queenPositions.push(i);
//   }
// }
//
// function searchQueens(queenPositions, n, i) {
//   console.log(queenPositions);
//   if ( i > n ) {
//     return;
//   }
//   let tmp;
//   for ( j = i; j < n; j++ ) {
//     tmp = queenPositions[i];
//     queenPositions[i] = queenPositions[j];
//     queenPositions[j] = tmp;
//     searchQueens(queenPositions, n, i + 1);
//     tmp = queenPositions[i];
//     queenPositions[i] = queenPositions[j];
//     queenPositions[j] = tmp;
//   }
// }
