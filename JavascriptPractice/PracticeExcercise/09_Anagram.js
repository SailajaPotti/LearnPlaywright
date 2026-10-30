const data = require('fs').readFileSync(0, 'utf8');
const lines = data.split('\n');
const s1 = (lines[0] || '');
const s2 = (lines[1] || '');
console.log(s1.split("").sort().join("")===s2.split("").sort().join("")?"YES":"NO");