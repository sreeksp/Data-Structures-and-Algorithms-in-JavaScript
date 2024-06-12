//check if two strings are rotations of each other?


function chaeckRotation(stringA, stringB) {
    if(stringA.length !== stringB.length){
        return;
        
    }
    return (stringA + stringA).indexOf(stringB) !== -1
    
}

chaeckRotation('sreekanth', 'kanthsree');