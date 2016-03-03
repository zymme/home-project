/**
 * Created by zimmerd on 2/1/16.
 */

'use strict';

homeProjectApp.controller('ProjectController', function ProjectController($scope) {

    $scope.projects = [
        {
            name: 'Clean up downstairs - box up moving items and stack in laundry room',
            date_started: null,
            date_completed: null,
            status: 'Not Started',
            description: 'We need to box up items from the shelves in the downstairs laundry room and box up in hold area in back',
            comments: 'boxing up needs to be done yet',
            cost: null,
            user: null
        },
        {
            name: 'Paint trim in master bathroom',
            date_started: null,
            date_completed: null,
            status: 'Complete',
            description: 'Paint trim in master bath - white',
            comments: 'Paint the trim and door in master bathroom white.',
            cost: 67.00,
            user: 'zimmerd'
        }
    ];


});
