const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = data[0];
const arr = data.slice(1, 1 + n);
const even=[];
const odd=[];
for(var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        even.push(arr[i]);
    }else
        odd.push(arr[i]);
}
console.log("Even Numbers: "+even.join(" "));
console.log("Odd Numbers: "+odd.join(" "));