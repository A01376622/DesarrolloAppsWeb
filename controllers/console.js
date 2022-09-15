//Para que path sea path
const path = require("path");

//Proceso cuando se llame a la ruta
exports.getAltaConsola = (req,res) => {
    // res.send("<h1>Formulario de consola</h1>")
    res.sendFile(path.join(__dirname,'..','views','form.html'));
}

exports.postAltaConsola = (req,res) => {
    console.log(req.body)
    console.log(isPalindrome(req.body.nombreConsola))
    res.json({estado: "Exitoso", como: req.body.nombreConsola})
}

exports.getConsultaConsola = (req,res) => {
    res.send("<h1>Datos de las consolas</h1>")
}

exports.postPalindrome = (req,res) => {
    // potentialPalindrome = req.body.palindrome
    // console.log(isPalindrome(potentialPalindrome))
    res.send(isPalindrome(req.body.palindrome))
}

exports.postDecodeWordF = (req,res) => {
    // console.log(req.body)
    res.send(decodeWordF(req.body.wordf))
}

function isPalindrome(word) {
    var re = /[\W_]/g; 
    var filteredWord = word.toLowerCase().replace(re, '');
    var reversedWord = filteredWord.split('').reverse().join(''); 
    if (filteredWord == reversedWord) {
        return "This word is a palindrome";
    } else {
        return "This word is not a palindrome";
    }
}

function decodeWordF(word) {
    const vowels = ["a", "e", "i", "o", "u", "é", "ó", "á", "í", "ú", "ü"]
    word = word.toLowerCase()
    let ans = ""
    for (let curr_pos = 0; curr_pos< word.length; curr_pos++){
        const prev_is_vowel = vowels.includes(word[curr_pos-1])
        const prev_next_is_eq = word[curr_pos-1] == word[curr_pos+1]
        const curr_is_f = word[curr_pos] == "f"

        if ( curr_is_f && prev_is_vowel && prev_next_is_eq) curr_pos += 2
        if (curr_pos < word.length) ans += word[curr_pos]
    }
    return ans;
}


