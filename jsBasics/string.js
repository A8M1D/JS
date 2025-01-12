const name = "Dea";
let sentence = "A new Sentence. ";
const doesIncludeNew = sentence.includes("new");
console.log(doesIncludeNew);

let updateSentence = sentence.replace("new", "great");
console.log(updateSentence);

trimedSentence = sentence.trim();
console.log(trimedSentence);

const sentenceArray = sentence.split(" ");
console.log(sentenceArray);

let lowerCaseSentence = sentence.toLowerCase();
console.log(lowerCaseSentence);

let upperCaseSentence = sentence.toUpperCase(); 
console.log(upperCaseSentence);