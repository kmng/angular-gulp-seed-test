(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .directive('todo', todo);

    /** @ngInject */
    function todo() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/todo/todo.html',            
            controller: TodoController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function TodoController(Todo) {
	   	var vm = this;

    		vm.todos = Todo.list();	
		
		vm.newTodo = new Todo();

    vm.save = function() {
        vm.newTodo.$save({}, function() {
            vm.todos.push(angular.copy(vm.newTodo));
            vm.newTodo = new Todo();
        });
    };

    vm.delete = function(todo) {
        todo.$delete({}, function() {
            var idx = vm.todos.indexOf(todo);
            vm.todos.splice(idx, 1);
        });
    };

    vm.update = function(todo) {
        todo.$update();
    };
	}
    }

})();
