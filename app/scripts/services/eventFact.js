(function() {
    function eventFactory() {
        var eventFactory =  {};
        var events = [];
        
        eventFactory.getAllEvents = function() {
            return events;
        }
        
        eventFactory.createEvent = function(event, eventList) {
            events.push(event);
            eventList = events;
            return eventList;
        }
        
        return eventFactory;
    }
    
    angular
        .module('eventApp')
        .factory('eventFactory', [eventFactory]);
})();



//angular.module('eventApp')
//    .factory('eventFactory', function() {
//    
//        var eventFactory = {};
//        var events = [];
//        
//        eventFactory.getAllEvents = function() {
//            return events;
//        }
//    
//        eventFactory.createEvent = function(event, eventList) {
//            events.push(event);
//            eventList = events;
//            return eventList;
//        }
//})