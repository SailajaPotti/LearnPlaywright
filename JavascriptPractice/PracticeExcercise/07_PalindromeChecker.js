const data = "madam";
const str = data.split('\n')[0].toLowerCase();
console.log((str.split("").reverse().join(""))===str?"YES":"NO");
