function pressed(){
    var value = document.getElementById("textarea1").value;
    
    var wordsNumber = checkWordsNum(value);
    var charNumber = numberChars(value);
    document.getElementById("wordsNumber").innerHTML = "words : " + wordsNumber;
    document.getElementById("charsNumber").innerHTML = "chars : " + charNumber;
}
function checkWordsNum(value){
    var wordsCounter = 0;
    var wasSpace = false;
    for (var i = 0; i < value.length; i++){
        if (value[i] == " "){
            if (wasSpace == false){
                wordsCounter++;
            }
            wasSpace = true;
        }
        else wasSpace = false;
    }
    return wordsCounter + 1;
}

function numberChars(value){
    var charsNumber = 0;
    var length = 0;
    for (var i = 0; i < value.length; i++){
        if (value[i] != " "){
            length++;
        }
    }
    return length;
}