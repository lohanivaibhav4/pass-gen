let pass1El = document.getElementById("pass1")
let pass2El = document.getElementById("pass2")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u","v","w","x","y","z",
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
     "~","`","!","@","#","$","%","^","&","*","(",")","_",
     "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passLength = 12;

function getRandomCharacter(){
    let randomChar = Math.floor(Math.random()*characters.length)
    return characters[randomChar];
}
function generateRandomPassword(){
    let pass = ""
    
    for (let i = 0; i < passLength; i++) {
        pass += getRandomCharacter()         
    }
    return pass;
}

function generate(){
    pass1El.textContent = generateRandomPassword();
    pass2El.textContent = generateRandomPassword();
}


