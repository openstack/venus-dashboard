(function () {
  'use strict';

  angular
        .module('horizon.dashboard.admin.venus')
        .controller('LogSearchController', LogSearchController);

  LogSearchController.$inject = ['$scope', 'venusSrv'];

  function LogSearchController($scope, venusSrv) {
    $scope.STATIC_URL = STATIC_URL;
    $scope.model = {
      start_time: new Date(),
      end_time: new Date(),
      condition: 'module_name',
      page_size: 20,
      page_num: 1
    };
    $scope.tableData = [];

    $scope.getData = function() {
      var config = {
        start_time: $scope.model.start_time.getTime() / 1000,
        end_time: $scope.model.end_time.getTime() / 1000,
        page_size: $scope.model.page_size,
        page_num: $scope.model.page_num
      };
      venusSrv.getLogs(config).then(function(res) {
        $scope.tableData = [];
        if (res.data.hasOwnProperty('data')) {
          $scope.tableData = res.data.data.values;
        }
      });
    };

    function init() {
      var end_time = new Date();
      end_time.setMilliseconds(0);
      var start_time = new Date();
      start_time.setMilliseconds(0);
      start_time.setTime(end_time.getTime() - 24 * 60 * 60 * 1000);
      $scope.model.start_time = start_time;
      $scope.model.end_time = end_time;

      $scope.getData();
    }

    init();
  }

})();
