const arr = [5, 1, 2, 1, 3, 2];
const arr1=[];
const n = arr.length;
let arr2=[];
for(let i=0; i<arr.length; i++){
    if(arr.indexOf(arr[i])===arr.lastIndexOf(arr[i])){
        
    }
    else{
        if(arr1.indexOf(arr[i])===-1)
        arr1.push(arr[i]);
    }
}
if(arr1.length===0){console.log("No duplicates found");}
else
        arr2 = arr1.reverse();
    for(let i=0;i<arr2.length;i++){
        console.log(arr2[i]);
}
