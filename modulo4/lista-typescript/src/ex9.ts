

function anagram(word:string):number{
    const numLetters:number=word.length
    let factorial=1
    for (let i = 1; i <= numLetters; i++) {
      factorial *= i;
    }
    return factorial
}
console.log(anagram("julieta"))