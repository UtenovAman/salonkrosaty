app.controller('taskCtrl', function($scope, localStorageService) {
  if (localStorageService.get("mes") != null) 
  {
    $scope.tasks = localStorageService.get("mes");           
  } 
  else 
  {
   $scope.tasks = [];
    localStorageService.set("mes", $scope.tasks)
  }
  
  function PacClass(id, name, surname, age, sex, us)
  {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.sex = sex;
    this.us = us;
  }
  $scope.addtask = function() {
    var iden = $scope.tasks.length+1;
    var student = new PacClass(iden, $scope.task.name, $scope.task.surname, $scope.task.age, $scope.task.sex, $scope.task.us)
    $scope.tasks.push($scope.task);
    console.log($scope.task);
    $scope.task = {};
    localStorageService.set("mes", $scope.tasks);
  };
  $scope.removeItem = function(index) {
    $scope.tasks.splice(index, 1);
    localStorageService.set("mes", $scope.tasks);
  };
});