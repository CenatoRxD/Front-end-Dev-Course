function Human(name, lastName, age, sex) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.sex = sex;

    // Метод конструктора.

    this.show = function () {
        document.write("Name: " + this.name + "; LastName: " + this.lastName + "; Age: " + this.age + "; Gander: " + sex);
    };

    //Статический параметр класа(аналогично делаеться и статический метод)

    Human.maxHuman = 10;

}

// Метод toString() который доступен всем обьектам Human;

Human.prototype.toString = function () {
    return "Name: " + this.name + "; LastName: " + this.lastName + "; Age: " + this.age + "; Gander: " + this.sex + "</br>";
};

var allHuman = [new Human("human", "human4ik", 12, "ne jasno"),
    new Human("human1", "human4ik1", 20, "ne jasno"),
    new Human("human2", "human4ik2", 9, "ne jasno"),
    new Human("human3", "human4ik3", 15, "ne jasno")];

//Сортировка массива. Аналог compareTo();

allHuman.sort(function (firsAge, secondAge) {
    var first = firsAge.age;
    var second = secondAge.age;

    if (first > second) {
        return -1;
    } else if (first < second) {
        return 1;
    } else {
        return 0;
    }
});

document.write(allHuman);