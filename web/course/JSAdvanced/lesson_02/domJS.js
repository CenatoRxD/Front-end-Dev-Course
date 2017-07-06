/**
 * Created by Sviatoslav on 06.07.2017.
 */
function allParagraphBorder() {

    var paragraphs = document.getElementsByTagName('p');
    for(var i = 0; i < paragraphs.length; i++){
        paragraphs[i].style.border = "solid black"
    }
}

function allLinksBorder() {

    var links = document.getElementsByTagName('a');
    for(var j = 0; j < links.length; j++){
        links[j].style.border = "solid red";
    }
}

function allDivBorder() {

    var divs = document.getElementsByTagName('div');
    for(var k = 0; k < divs.length; k++){
        divs[k].style.border = "solid blue";
    }
}