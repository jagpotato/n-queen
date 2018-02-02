
// http://vivi.dyndns.org/tech/puzzle/NQueen.html

// nQueen(8);

// function nQueen(n) {
//   let queenPositions = [];
//   let rup = [];
//   let rdn = [];
//   initArray(queenPositions, rup, rdn, n);
//   searchQueens(queenPositions, rup, rdn, n, 0);
//   // console.log(queenPositions, rup, rdn);
// }

// function initArray(queenPositions, rup, rdn, n) {
//   if ( queenPositions.length > 0 ) {
//     while ( queenPositions.length > 0 ) {
//       queenPositions.pop();
//     }
//   }
//   if ( rup.length > 0 ) {
//     while ( rup.length > 0 ) {
//       rup.pop();
//     }
//   }
//   if ( rdn.length > 0 ) {
//     while ( rdn.length > 0 ) {
//       rdn.pop();
//     }
//   }
//   for ( let i = 0; i < n; i++ ) {
//     queenPositions.push(-1);
//   }
//   for ( let i = 0; i < (2 * n - 1); i++ ) {
//     rup.push(false);
//   }
//   for ( let i = 0; i < (2 * n - 1); i++ ) {
//     rdn.push(false);
//   }
// }

// function searchQueens(queenPositions, rup, rdn, n, i) {  
//   for ( let j = 0; j < n; j++ ) {
//     if ( queenPositions[j] < 0 && rup[i + j] === false && rdn[j - i + n - 1] === false ) {
//       if ( i + 1 === n ) {
//         console.log("a");
//       } else {
//         queenPositions[j] = i;
//         rup[i + j] = true;
//         rdn[j - i + n - 1] = true;
//         searchQueens(queenPositions, rup, rdn, n, i + 1);
//         queenPositions[j] = -1;
//         rup[i + j] = false;
//         rdn[j - i + n - 1] = false;
//       }
//     }
//   }
// }



nQueen(8);

function nQueen(n) {
  let queenPositions = [];
  let rup = [];
  let rdn = [];  
  initArray(queenPositions, rup, rdn, n);
  searchQueens(queenPositions, rup, rdn, n, 0);
}

function initArray(queenPositions, rup, rdn, n) {
  for ( let i = 0; i < n; i++ ) {
    queenPositions.push(-1);
  }
  for ( let i = 0; i < (2 * n - 1); i++ ) {
    rup.push(false);
  }
  for ( let i = 0; i < (2 * n - 1); i++ ) {
    rdn.push(false);
  }
}

function searchQueens(queenPositions, rup, rdn, n, i) {
  let stack = [];
  stack.push({"pos": queenPositions, "rup": rup, "rdn": rdn, "n": n, "i": i});
  let answer = false;
  
  while ( stack.length > 0 ) {
    if ( answer === true ) {
      break;
    }

    let topIndex = stack.length - 1;
    queenPositions = stack[topIndex].pos.slice();
    rup = stack[topIndex].rup.slice();
    rdn = stack[topIndex].rdn.slice();
    n = stack[topIndex].n;
    i = stack[topIndex].i;  
    stack.pop();

    for ( let j = 0; j < n; j++ ) {
      if ( queenPositions[j] < 0 && rup[i + j] === false && rdn[j - i + n - 1] === false ) {
        if ( i + 1 === n ) {
          queenPositions[j] = i;
          console.log(queenPositions);
          answer = true;
        } else {
          queenPositions[j] = i;
          rup[i + j] = true;
          rdn[j - i + n - 1] = true;
          stack.push({"pos": queenPositions.slice(), "rup": rup.slice(), "rdn": rdn.slice(), "n": n, "i": i + 1});
          queenPositions[j] = -1;
          rup[i + j] = false;
          rdn[j - i + n - 1] = false;
        }
      }
    }
  }
}



