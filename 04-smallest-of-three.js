// 04: Create a function that returns the smallest of three numbers.
function small(a,b,c){
    if(a<b && a<c){
        return (`${a} is the smallest`);
    }
    else if(b < a && b < c){
        return(`${b} is the smallest`);
    }
    else if(c < a && c < b){
        return (`${c} is the smallest`);
    }
}

console.log(small(54, 12, 49));
console.log(small(540, 576, 234));