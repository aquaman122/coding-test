function solution(id_list, report, k) {
  const reportIdsSet = {};
  const reportCountId = {};
  
  id_list.forEach((id) => {
      reportIdsSet[id] = [];
      reportCountId[id] = 0;
  });
  
  report.forEach((data) => {
      const [reporter, reported] = data.split(' ');
      if(!reportIdsSet[reporter].includes(reported)) {
          reportIdsSet[reporter].push(reported);
          reportCountId[reported]++;
      }
  });
  
  const pauseId = Object.entries(reportCountId).filter(([id, reportCount]) => reportCount >= k).map(([id, count]) => id);
  
  const answer = id_list.map((id) => {
      const reportIds = reportIdsSet[id];
      let reportCount = 0;
      
      reportIds.forEach((id) => {
          if (pauseId.includes(id)) {
              reportCount++;
          }
      });
      return reportCount;
  })
  return answer;
  
}