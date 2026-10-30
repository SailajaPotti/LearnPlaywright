const data = "Hello World";
const str = data.split('\n')[0];
const finalstr=[];
for(var i=0;i<str.length;i++){
    if(finalstr.includes(str[i])){}
        else
            finalstr.push(str[i]);
}
console.log(finalstr.toString().replaceAll(",",""));
