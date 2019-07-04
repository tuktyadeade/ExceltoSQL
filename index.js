window.onload = function () {
    var inPutText = document.getElementById("inputid");
    var outPutText = document.getElementById("outputid");
    var rowCount = document.getElementById("countRowsid")
    inPutText.addEventListener("keyup", function () {
        var textRows = inPutText.value.trim().split('\n');
        rowCount.innerText = textRows.length;
        var textArray = textRows;
        outPutText.value = "(" + textArray + ")"; // number (1,2,3)


    })

    $(document).on('click', 'li', function () {
        $(this).addClass('active');
        console.log("addclass succeed");
    })



}

