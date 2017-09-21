var count = 0;
window.addEventListener("click", function () {

    count++;
    if (count === 10){
        var content = document.body.childNodes;
        for(var i = 0; i < content.length; i++){
            if (content[i].nodeName === "P"){
                document.body.removeChild(content[i]);
            }
        }
        count = 0;
    }

    var par = document.createElement("p");
    par.innerHTML = "Paragraph";
    document.body.appendChild(par);
}, true);
