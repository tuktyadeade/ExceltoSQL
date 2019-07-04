window.onload = function () {
    var inPutText = document.getElementById("inputid");
    var outPutText = document.getElementById("outputid");
    var rowCount = document.getElementById("countRowsid")
    inPutText.addEventListener("keyup", function () {
        var countRows = inPutText.value.split('\n');
        rowCount.innerText = countRows.length;
        var textArray = inPutText.value.split('\n');
        //inPutText.value.split('\n');
        //outPutText.value = "(" + textArray + ")"; // number (1,2,3)
        outPutText.value = '(' + textArray.map(d => `'${d}'`) + ')';
        //string ('1','2','3') })

    })
 
}