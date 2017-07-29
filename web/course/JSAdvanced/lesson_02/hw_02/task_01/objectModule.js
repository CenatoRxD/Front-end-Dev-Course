var paragraph = {};

window.onload = paragraph.changePar = function () {
    var p = document.getElementsByTagName("p");

    for(var i = 0; i < p.length; i++){
        p[i].innerHTML = "PARAGRAPH";
    }
};

