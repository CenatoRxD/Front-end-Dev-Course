function uneven() {
    var unevRab = "";
    for (var k = 1; k <= 100; k++) {
        if (k % 2 !== 0) {
            unevRab = unevRab + k + " ";
            document.getElementById('result').innerHTML = unevRab;
        }
    }
}
function oddRabbit() {
    var oddRab = "";
    for (var j = 1; j <= 100; j++) {
        if (j % 2 === 0) {
            oddRab = oddRab + j + " ";
            document.getElementById('result').innerHTML = oddRab;
        }
    }
}
function triangle() {
    var a = +prompt("Enter first number");

    for (var x = a; x < 2 * a; x++) {
        for (var y = a; y < a; y++) {
            if ((x === a && y === parseInt(a / 2)) ||
                ((x > a && x < 2 * a) && ((y === parseInt(a / 2) - x) || (y === parseInt(a / 2) + x))) ||
                (x === 2 * a - 1)) {
                document.write("*");
            } else {
                document.write("&nbsp");
            }
        }
        document.writeln("<br/>");
    }
}