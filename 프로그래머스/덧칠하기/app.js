function solution(n, m, section) {
  let t = 0;
  let nArr = new Array(n).fill('O');
  
  for (let i =0; i < section.length; i++) {
      nArr[section[i] - 1] = 'X';
  }
  // 총 8개 ['O','O','X','X','O','O','X','O']; 배열 만듬 
  
  nArr.forEach((item, idx) => {
      // 'X' 칠하지않은 부분이 있다면 
      if(item === 'X') {
          // for 문으로 'X'인 부분부터 m횟수 뒤 인덱스까지 'O'로 바꿔주기
          for (let j=0; j<m;j++) {
              nArr[idx+j] = 'O';
          }
          t++;
      }
  });
  
  return t;
}