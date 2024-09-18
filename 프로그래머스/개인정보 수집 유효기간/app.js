function solution(today, terms, privacies) {
  var answer = [];
  let termsObj = {};
  
  terms.forEach(v => {
      let [alpha,term] = v.split(' ');
      termsObj[alpha] = Number(term);
  });
  
  let date = today.split('.').map(v => Number(v));
  let totalDate = date[0] * 12 * 28 + date[1] * 28 + date[2];
  
  privacies.forEach((v, i)=> {
      let [date, alpha] = v.split(' ');
      let preDate = date.split('.').map(v => Number(v));
      let preTotalDate = preDate[0] * 12 * 28 + preDate[1] * 28 + preDate[2] + termsObj[alpha] * 28;
      if (totalDate >= preTotalDate) {
          answer.push(i+1)
      };
  });

  return answer;
}