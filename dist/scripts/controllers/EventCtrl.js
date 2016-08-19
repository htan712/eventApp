(function() {
    function EventCtrl(eventFactory) {
        
        var self = this;
        this.event = eventFactory.getAllEvents();
        
        this.categories = [{id:1, name:'Music', group:'Main'}, {id:2, name:'Cinema', group:'Main'}, {id:3, name:'Games', group:'Others'}, {id:4, name:'Special Category', group:'Others'}];
        
        this.selectedOption = {id:1, name:'Music', group:'Main'};
        this.specialEvent = 'false';
        this.specialValue = {id:1, value:'somethingSpecial'};
        
        this.specialType = [{name: 'Age Restricted', checked: false}, {name: 'Luxury', checked:false}];
        
        this.selectAllTypes = function() {
            if (self.bothSelected) {
                self.bothSelected = true;
            } else {
                self.bothSelected = false;
            }
            
            angular.forEach(self.specialType, function(item) {
                item.checked = self.bothSelected;
            })
        }

        this.submitForm = function (form){
            form.category = this.selectedOption.id;
            eventFactory.createEvent(angular.copy(form), this.event);
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
