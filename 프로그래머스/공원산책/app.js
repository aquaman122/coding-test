function solution(park, routes) {
  let answer = [];
  let curRow;
  let curCol;
  let maxRow = park.length;
  let maxCol = park[0].length;

  park.forEach((rows, ri) => {
      rows.split('').forEach((col, ci) => {
          if (col === 'S') {
              curRow = ri;
              curCol = ci;
          }
      });
  });
  
  let objRoutes = routes.map(route => {
      let [op, n] = route.split(' ');
      return {op, n:Number(n)}
  });
  
  objRoutes.forEach(({op, n}) => {
      if (op === 'N') {
          if (curRow - n >= 0) {
              let isX = false;
              for (let i=curRow - 1; i > curRow - n - 1; i--) {
                  if (park[i][curCol] === 'X') {
                      isX = true;
                      break;
                  }
              }
              if(!isX) {
                  curRow -= n;
              }
          }
      } else if (op === 'S') {
          if (curRow + n < maxRow) {
              let isX = false;
              for (let i=curRow + 1; i<curRow+n + 1; i++) {
                  if (park[i][curCol] === 'X') {
                      isX = true;
                      break;
                  }
              }
              if (!isX) {
                  curRow += n;
              }
          }
      } else if (op === 'W') {
          if (curCol - n >= 0) {
              let isX = false;
              for(let i=curCol -1; i>curCol - n - 1; i--) {
                  if (park[curRow][i] === 'X') {
                      isX = true;
                      break;
                  }
              }
              if (!isX) {
                  curCol -= n;
              }
          }
      } else if (op === 'E') {
          if (curCol + n < maxCol) {
              let isX = false;
              for (let i=curCol + 1; i<curCol + n + 1; i++) {
                  if(park[curRow][i] === 'X') {
                      isX = true;
                      break;
                  }
              }
              if (!isX) {
                  curCol += n;
              }
          }
      } 
  });
  answer.push(curRow,curCol);
  return answer;
}