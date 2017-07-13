/**
 * Created by Sviatoslav on 08.07.2017.
 */
window.onload = function () {
    window.setTimeout(relocate, 5000)
};

function relocate() {
    window.open("newWindow.html", "width=200,height=200");
}