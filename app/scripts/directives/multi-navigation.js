'use strict';

/**
 * @ngdoc directive
 * @name multiNavigationApp.directive:multiNavigation
 * @description
 * # multiNavigation
 */
angular.module('multiNavigationApp')
  .directive('multiNavigation', function () {
    return {
      scope: {
        sections: '='
      },
      link: function ($scope) {
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
      },
      templateUrl: 'views/multi-navigation.html'
    };
  });
