const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);
arr.sort((a, b) => a - b);
const max = arr[arr.length - 1];
console.log(max);