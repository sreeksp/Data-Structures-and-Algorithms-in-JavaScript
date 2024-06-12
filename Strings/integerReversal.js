function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc , '')
    
}

function integerReversal(num){

    let reverseNumber = parseInt(reverseString(num.toString()));

    return reverseNumber * Math.sign(num)
    
}

integerReversal(-876)