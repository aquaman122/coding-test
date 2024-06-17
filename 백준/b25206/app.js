const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input)

function solution(input) {
    // write here

    // const PxInput = input.filter((item) => item.split(' ')[2] !== 'P');

    // let scoreSum = 0;
    // let getScores = 0;
    // PxInput.map((item, i) => {
    //     const [subject, score, rank] = item.split(' ');
    //     let rankScore = 0;
    //     if (rank === 'A+') {
    //         rankScore = 4.5;
    //     } else if (rank === 'A0') {
    //         rankScore = 4;
    //     } else if (rank === 'B+') {
    //         rankScore = 3.5;
    //     } else if (rank === 'B0') {
    //         rankScore = 3;
    //     } else if (rank === 'C+') {
    //         rankScore = 2.5;
    //     } else if (rank === 'C0') {
    //         rankScore = 2.0;
    //     } else if (rank === 'D+') {
    //         rankScore = 1.5;
    //     } else if (rank === 'D0') {
    //         rankScore = 1;
    //     } else if (rank === 'F') {
    //         rankScore = 0;
    //     }
    //     scoreSum += Number(score);
    //     getScores += Number(score) * rankScore
    // });
    // console.log(getScores / scoreSum);
    
    let scoreSum = 0;
    let getScores = 0;

    const subScore = {
        "A+": 4.5,
        "A0": 4.0,
        "B+": 3.5,
        "B0": 3.0,
        "C+": 2.5,
        "C0": 2.0,
        "D+": 1.5,
        "D0": 1.0,
        "F": 0.0
    }
    input.forEach(item => {
        const [subject, score, rank] = item.split(' ');

        if (rank !== 'P') {
            const rankScore = subScore[rank];

            scoreSum += Number(score);
            getScores += Number(rankScore) * score;
        }
    })
    console.log(getScores / scoreSum);
}