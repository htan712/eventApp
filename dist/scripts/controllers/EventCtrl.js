(function() {
    function EventCtrl(eventFactory) {

        this.event = eventFactory.getAllEvents();
        this.categories = [{id:1, name:'Music', group:'Main'}, {id:2, name:'Cinema', group:'Main'}, {id:3, name:'Games', group:'Others'}, {id:4, name:'Special Category', group:'Others'}];

        this.submitForm = function (form){
            eventFactory.createEvent(angular.copy(form), this.event);
            console.log(this.event);
        }
    }

    angular
        .module('eventApp')
        .controller('EventCtrl', ['eventFactory', EventCtrl]);
})();

//angular.module('eventApp')
//    .controller('formCtrl',['eventFactory', '$scope', function(eventFactory, $scope) {
//
//    $scope.event = eventFactory.getAllEvents();
//    $scope.submitForm = function (form){
//        eventFactory.createEvent(angular.copy(form), $scope.event);
//        console.log($scope.event);
//    }
//
//
//} ])
