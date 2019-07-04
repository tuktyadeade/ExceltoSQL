window.onload = function () {
    var inPutText = document.getElementById("inputid");
    var outPutText = document.getElementById("outputid");
    var wordCount = document.getElementById("countWordsid")
    inPutText.addEventListener("keyup", function () {
        var characters = inPutText.value.trim().split('');
        wordCount.innerText = characters.length;



    })
   
}