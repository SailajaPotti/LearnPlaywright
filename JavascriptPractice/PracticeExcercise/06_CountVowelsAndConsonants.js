const data = "He  llo World";
const str = data.split('\n')[0].toLowerCase().replaceAll(" ","");
const vowels=["a","e","i","o","u"];
const finalvow=[], finalcon=[];
for(var i=0;i<str.length;i++){
    if(vowels.includes(str[i])){
        finalvow.push(str[i]);
    }else
        finalcon.push(str[i]);
}
console.log("Vowels: "+finalvow.length);
console.log("Consonants: "+finalcon.length);
