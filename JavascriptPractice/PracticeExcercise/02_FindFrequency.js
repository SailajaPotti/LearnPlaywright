// const data = require('fs').readFileSync(0, 'utf8');
// const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
// const n = tokens[0];
// const arr = tokens.slice(1, 1 + n);
const arr = [5, 1, 2, 1, 3, 2];
const arr1=[];
const n = arr.length;
console.log(arr);

for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }   
    }
    if(arr1.indexOf(arr[i])===-1){arr1.push(arr[i]);
    console.log(arr[i]+" appears "+count+"times");}
}
