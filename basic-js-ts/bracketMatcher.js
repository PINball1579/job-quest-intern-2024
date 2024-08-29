function bracketMatcher(str) {
    let bracket = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            bracket++; //Increase bracket for an opening bracket
        } 
        else if (str[i] === ')') {
            bracket--; //Decrease bracket for a closing bracket
        }

        //If bracket goes negative, means unmatched closing bracket
        if (bracket < 0) {
            return 0;
        }
    }

    //If bracket is 0, all brackets are matched
    return bracket === 0 ? 1 : 0;
}

//Test:
console.log(bracketMatcher("(hello (world))"));  //Output:1
console.log(bracketMatcher("(hello (world)))")); //Output:0
