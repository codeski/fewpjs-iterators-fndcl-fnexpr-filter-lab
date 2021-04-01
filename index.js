// Code your solution here
function findMatching(array, name){
    return array.filter( n => { return n.toLowerCase() === name.toLowerCase()} ) 
}

// function fuzzyMatch(array, beginningLetters) {
//     let i = beginningLetters.length
//     return array.filter( function(name) {
//         if ( beginningLetters === name.slice(0, i) ) {
//             return name
//         }
//     })  
// }

function fuzzyMatch(array, beginningLetters) {
    let i = beginningLetters.length
    return array.filter( n => { 
        if (beginningLetters === n.slice(0, i)) { 
            return n
        }
    })
}

function matchName(array, string) {
    return array.filter( obj => {return obj.name === string})
}

