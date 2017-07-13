/**
 * Created by Sviatoslav on 13.07.2017.
 */
window.onload = function () {

    var first = document.getElementById("firstNum");
    var second = document.getElementById("secondNum");

    var add = document.getElementById("add");
    var sub = document.getElementById("sub");
    var mul = document.getElementById("mul");
    var div = document.getElementById("div");

    /*add.addEventListener("click", function () {
        var a = parseFloat(first.value);
        var b = parseFloat(second.value);
        var sum = a + b;
        alert(a + " + " + b + " = " + sum);
    }, true);

    sub.addEventListener("click", function () {
        var a = parseFloat(first.value);
        var b = parseFloat(second.value);
        var sub = a - b;
        alert(a + " - " + b + " = " + sub);
    }, true);

    mul.addEventListener("click", function () {
        var a = parseFloat(first.value);
        var b = parseFloat(second.value);
        var mul = a * b;
        alert(a + " * " + b + " = " + mul);
    }, true);

    div.addEventListener("click", function () {
        var a = parseFloat(first.value);
        var b = parseFloat(second.value);
        var div = a - b;
        alert(a + " / " + b + " = " + div);
    }, true);*/

    add.onclick = function () {
        var a = parseFloat(first.value);
        var b = parseFloat(second.value);
        var sum = a + b;
        alert(a + " + " + b + " = " + sum);
    };

    sub.onclick = function () {
        var a = parseFloat(first.value);
        var b = parseFloat(second.value);
        var sub = a - b;
        alert(a + " - " + b + " = " + sub);
    };

    mul.onclick = function () {
        var a = parseFloat(first.value);
        var b = parseFloat(second.value);
        var mul = a * b;
        alert(a + " * " + b + " = " + mul);
    };

    div.onclick = function () {
        var a = parseFloat(first.value);
        var b = parseFloat(second.value);
        var div = a * b;
        alert(a + " / " + b + " = " + div);
    }
};