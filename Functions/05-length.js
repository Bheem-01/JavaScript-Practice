//Create a function that returns the length of string
// and first character
function findLength(s){
    return (`length: ${s.length}, first character: ${s[0]}`);

}
console.log(findLength("This is a string"));

//  // s.length gives the total number of characters
    // s[0] gives the first character

    // Comma operator evaluates both expressions
    // but returns only the last expression (s[0])
// return a, b; means
// return b; because the comma operator returns the last evaluated value.