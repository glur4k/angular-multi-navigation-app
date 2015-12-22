'use strict';

/**
 * @ngdoc function
 * @name multiNavigationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the multiNavigationApp
 */
angular.module('multiNavigationApp')
  .controller('MainCtrl', function ($scope) {
    $scope.sections = [{
      title: 'Nav 1',
      subSections: [{
        title: 'Sub-Nav 1.1',
        content: 'Content 1.1'
      }, {
        title: 'Sub-Nav 1.2',
        content: 'Content 1.2'
      }, {
        title: 'Sub-Nav 1.3',
        content: 'Content 1.3'
      }, {
        title: 'Sub-Nav 1.4',
        content: 'Content 1.4'
      }]
    }, {
      title: 'Nav 2',
      subSections: [{
        title: 'Sub-Nav 2.1',
        content: 'Content 2.1'
      }, {
        title: 'Sub-Nav 2.2',
        content: 'Content 2.2'
      }, {
        title: 'Sub-Nav 2.3',
        content: 'Content 2.3'
      }, {
        title: 'Sub-Nav 2.4',
        content: 'Content 2.4'
      }]
    }, {
      title: 'Nav 3',
      subSections: [{
        title: 'Sub-Nav 3.1',
        content: 'Content 3.1'
      }, {
        title: 'Sub-Nav 3.2',
        content: 'Content 3.2'
      }, {
        title: 'Sub-Nav 3.3',
        content: 'Content 3.3'
      }, {
        title: 'Sub-Nav 3.4',
        content: 'Content 3.4'
      }]
    }];
    $scope.selectSection = function (section) {
      $scope.selectedSection = section;
      $scope.selectedSubSection = section.lastSelected || section.subSections[0];
    };
    $scope.selectSubSection = function (subSection) {
      $scope.selectedSubSection = subSection;
      $scope.selectedSection.lastSelected = subSection;
    };
    $scope.selectedSection = $scope.sections[0];
    $scope.selectedSubSection = $scope.selectedSection.subSections[0];
  });
