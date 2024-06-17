const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution();

function solution() {
    // write here
    // const data = [
    //     [0, 2, 4, 2],
    //     [0, 0, 8, 0],
    //     [2, 2, 4, 8],
    //     [0 ,16, 0, 4],
    // ];

    /* [2, 4, 2];
       [8]
       [4, 4, 8]
       [16, 4];
    */

    // let newData = [[], [], [], []];
    // data.forEach((rowData, i) => {
    //     rowData.forEach((cellData, j) => {
    //         if (cellData) {
    //             const currentRow = newData[i];
    //             // newData[i] = newData[0], newData[1], newData[2], newData[3]
    //             const prevData = currentRow[currentRow.length - 1];
    //             if (cellData === prevData) {
    //                 currentRow[currentRow.length - 1] *= -2;
    //             } else {
    //                 newData[i].push(cellData);
    //             }
    //         }
    //     })
    // });

    // [1, 2, 3, 4].forEach((rowData, i) => {
    //     [1, 2, 3, 4].forEach((cellData, j) => {
    //         data[i][j] = Math.abs(newData[i][j]) || 0;
    //     });
    // });
    // console.log(data);

    // const data = [
    //     [0, 2, 2, 4],
    //     [16, 2, 4, 0],
    //     [0, 0, 2, 0],
    //     [16, 16, 4, 2]
    // ];

    /* [0, 0, 4, 4],
       [0, 16, 2, 4],
       [0, 0, 0, 2],
       [0, 32, 4, 2]
     */
    //    const newData = [[], [], [], []];
    //    data.forEach((rowData, i) => {
    //      rowData.forEach((cellData, j) => {
    //        if (rowData[3 - j]) {
    //          const currentRow = newData[i]
    //          const prevData = currentRow[currentRow.length - 1];
    //          if (prevData === rowData[3 - j]) {
    //            currentRow[currentRow.length - 1] *= -2;
    //          } else {
    //            newData[i].push(rowData[3 - j]);
    //          }
    //        }
    //      });
    //    });
    // console.log(newData);
    // [1, 2, 3, 4].forEach((rowData, i) => {
    //     [1, 2, 3, 4].forEach((cellData, j) => {
    //         data[i][3 - j] = Math.abs(newData[i][j]) || 0;
    //     });
    //    });
    // console.log(data)   ;

    // const data = [
    //     [0, 2, 4, 2],
    //     [0, 2, 4, 0],
    //     [16, 4, 0, 8],
    //     [0, 2, 2, 2]
    // ]

    // const newData = [[], [], [], []];
    // data.forEach((rowData, i) => {
    //     rowData.forEach((cellData, j) => {
    //         if(cellData) {
    //             const currentRow = newData[j];
    //             const prevData = currentRow[currentRow.length - 1];
    //             if (cellData === prevData) {
    //                 currentRow[currentRow.length - 1] *= -2;
    //             }
    //         } else {
    //             newData[j].push(cellData);
    //         }
    //         console.log(newData);
    //     });
    // });
    const data = [
        [2, 2, 4, 2],
        [4, 2, 0, 2]
    ]
    const newData = [[], []];

    data.forEach((rowData, i) => {
        rowData.forEach((cellData, j) => {
            if(cellData) {
                const currentRow = newData[i];
                const prevData = currentRow[currentRow.length - 1];
                if (prevData === cellData) {
                    currentRow[currentRow.length - 1] *= -2;
                } else {
                    newData[i].push(cellData);
                    console.log(newData[i]);
                }
            }
        })
    })
    console.log(newData);
}