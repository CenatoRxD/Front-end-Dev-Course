/**
 * Created by Sviatoslav on 01.07.2017.
 */
function validAge(a) {
    var bool = true;
    if (a < 18 && a > 0) {
        alert("You can't play on this game, sorry.");
        bool = false;
    } else if (a >= 18) {
        alert("Click Ok, to play");
        bool = true;
    } else {
        alert("You enter incorrect Age");
        bool = false;
    }
    return bool;
}

function findLuckyNumber() {
    var correctAnswer = 10;
    var count = 1;
    while (count !== 5) {
        var enterNum = +prompt("Enter Your Number pls, you have 4 attempts");
        if (enterNum < correctAnswer) {
            alert("Your number lower from lucky number, attempt " + count);
            count++;
        } else if (enterNum > correctAnswer) {
            alert("Your number more from lucky number, attempt " + count);
            count++;
        } else if (enterNum === correctAnswer) {
            alert("Congratulation you win, you found lucky number");
            break;
        } else {
            alert("You don't find lucky number for 4 attempts. You lose");
        }
    }
}