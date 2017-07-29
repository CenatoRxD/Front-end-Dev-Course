/**
 * Created by Sviatoslav on 20.07.2017.
 */
lastVisited(function () {
    var date = new Date(new Date().getTime() + 60 * 60 * 24 * 30);
    document.cookie = "name=last_visit"
});