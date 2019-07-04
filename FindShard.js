window.onload = function () {
    var inPutText = document.getElementById("inputid");
    var outputTableId = document.getElementById("outputTableId");
    var convertId = document.getElementById("convertId");
    var textArray;
    var charectersCount = new Array;


    convertId.addEventListener("click", function () {
        var Text = inPutText.value;
        textArray = Text.split("\n");
        console.log("text array length: " + textArray.length);
        //var a = ["a", "b", "c"];
        for (var i = 0; i <= textArray.length - 1; i++) {
            charectersCount.push(((textArray[i] % 16) + 1).toString())
            console.log("Each array length: " + charectersCount[i]);

        }
        console.log("charectersCount is : " + charectersCount);
        for (var i = 0; i <= textArray.length; i++) {
            //   txt = charectersCount[i] + "<br/>";
            console.log(charectersCount[i]);
        }
        //outputTableId.appendChild("<tr/>") = txt;

        //console.log("charectersCount is : " +  charectersCount);
        var perrow = 1, // 3 items per row
            count = 0, // Flag for current cell
            table = document.createElement("table"),
            row = table.insertRow();

        for (var i = 0; i <= textArray.length - 1; i++) {

            var cell = row.insertCell();
            cell.innerHTML = textArray[i];
            var cell = row.insertCell();
            cell.innerHTML = charectersCount[i];
            row = table.insertRow();


        }

        // ATTACH TABLE TO CONTAINER
        document.getElementById("container").appendChild(table);
    }

    )


}

