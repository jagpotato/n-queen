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

// http://www.ci.sys.fit.ac.jp/ai/nqueen.html#N66079
// 特定規則
function searchQueens(queenPositions, rup, rdn, n, i) {
  if ( n < 4 ) {
    console.log("n < 4");
  } else {    
    if ( n % 2 === 0 ) {
      applyRule(queenPositions, n);
    } else {
      applyRule(queenPositions, n - 1);
      queenPositions[n - 1] = n - 1;
    }
    console.log(queenPositions);
  }
}

function applyRule(queenPositions, n) {
  if ( n % 6 === 0 || (n - 4) % 6 === 0 ) {
    for ( let i = 0; i < n / 2; i++ ) {
      queenPositions[2 * i + 1] = i;
      queenPositions[2 * i] = n / 2 + i;
    }
  } else if ( (n - 2) % 6 === 0 ) {
    for ( let i = 0; i < n / 2; i++ ) {
      queenPositions[(2 * i + n / 2 - 1) % n] = i;
      queenPositions[n - (2 * i + n / 2 - 1) % n - 1] = n - i - 1;
    }
  }
}

// 非再帰
// function searchQueens(queenPositions, rup, rdn, n, i) {
//   let stack = [];
//   stack.push({"pos": queenPositions, "rup": rup, "rdn": rdn, "n": n, "i": i});
//   let answer = false;
  
//   while ( stack.length > 0 ) {
//     if ( answer === true ) {
//       break;
//     }

//     let topIndex = stack.length - 1;
//     queenPositions = stack[topIndex].pos.slice();
//     rup = stack[topIndex].rup.slice();
//     rdn = stack[topIndex].rdn.slice();
//     n = stack[topIndex].n;
//     i = stack[topIndex].i;  
//     stack.pop();

//     for ( let j = 0; j < n; j++ ) {
//       if ( queenPositions[j] < 0 && rup[i + j] === false && rdn[j - i + n - 1] === false ) {
//         if ( i + 1 === n ) {
//           queenPositions[j] = i;
//           console.log(queenPositions);
//           answer = true;
//         } else {
//           queenPositions[j] = i;
//           rup[i + j] = true;
//           rdn[j - i + n - 1] = true;
//           stack.push({"pos": queenPositions.slice(), "rup": rup.slice(), "rdn": rdn.slice(), "n": n, "i": i + 1});
//           queenPositions[j] = -1;
//           rup[i + j] = false;
//           rdn[j - i + n - 1] = false;
//         }
//       }
//     }
//   }
// }

// http://vivi.dyndns.org/tech/puzzle/NQueen.html
// 再帰
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


