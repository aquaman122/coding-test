function solution(bandage, health, attacks) {
  var answer = [];
  const [ct, rm, ar] = bandage;
  let lastAttack = attacks[attacks.length -1][0];
  let attackTime = [];
  let attackDamage = [];
  let t = 0; // 붕대 연속
  let curHp = health;
  let attack = 0; // 이번턴에 공격 당했는지 유무확인
  
  attacks.forEach(rows => {
      attackTime.push(rows[0]);
      attackDamage.push(rows[1]);
  });
  
  
  for (let i = 0; i <= lastAttack; i++) {
      if (i !== 0 ) {
          t++;
      }
      
      for (let j =0; j < attacks.length; j++) { 
          if (i === attackTime[j]) { 
              curHp -= attackDamage[j];
              t = 0;
              attack++;
          }
      }
      if (curHp <= 0) {
                  return -1;
              }
      if (t === ct) {
          curHp += ar;
          t = 0;
      }
      if (curHp >= health) {
          curHp = health;
      } else {
          if (attack === 0) {
            curHp += rm;  
          }
      }
      answer.push(curHp);
      attack = 0;
      
  }
  return answer[answer.length - 1];
}