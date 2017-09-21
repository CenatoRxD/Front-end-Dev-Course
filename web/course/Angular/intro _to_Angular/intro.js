function Task(task, link, description) {
    this.task = task;
    this.link = link;
    this.description = description;

}

var tasks = [3];

var introAngular = angular.module("intro", []);

var introAngularCtrl = introAngular.controller("introAngularCtrl", function ($scope) {
    $scope.redirect = function () {
        var source = window.event.srcElement.id;
        if (source === "first") {
            window.open('https://itvdn.com/', '_blank');
        } else if (source === "second") {
            window.open('https://getbootstrap.com/docs/4.0/components/card/', '_blank');
        } else if (source === "third") {
            window.open('https://angularjs.org/', '_blank');
        }
    };

    $scope.addTask = function () {
        $scope.data = tasks;
        var task = $scope.taskName;
        var link = $scope.link;
        var descr = $scope.description;
        tasks.push(new Task(task, link, descr));
    }
})

/*
var serial = JSON.stringify(tasks);
localStorage.setItem("storage", serial);
if (localStorage.getItem("storage")){
    document.getElementById("allTask").innerHTML = localStorage.getItem("storage");
}*/
