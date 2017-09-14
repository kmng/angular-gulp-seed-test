(function() {
    'use strict';

angular
    .module("angularSeedApp")
    .factory("Todo", Todo);

function Todo($resource) {
    var Todo = $resource(
        "http://192.168.86.137:8080/api/todos/:id",
        {"id": "@id"},
        {"update": {method: "PUT"}, "list": {method: "GET", isArray: true}}
    );
    return Todo;
}
})();
