(function () {
    var btn = document.getElementById("red");
    btn.addEventListener("click", function () {
        var allRedButton = document.getElementsByClassName("redButton");
        for (var i = 0; i < allRedButton.length; i++) {
                document.getElementById("into").innerHTML = allRedButton[i].nodeName + allRedButton[i].nodeValue;
        }
    });
})();