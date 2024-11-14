function solution(number, limit, power) {
  let arr = [];
  for (let i =1; i <= number; i++) {
     let r = [];
     for (let j =1; j <= Math.sqrt(i); j++) {
         if (i % j === 0) {
             if (i / j != j) r.push(i / j);
             r.push(j);
         }
     }
  arr.push(r.length);
  }
  return arr.map(v => v <= limit ? v : power).reduce((acc, cur) => acc += cur , 0);
}