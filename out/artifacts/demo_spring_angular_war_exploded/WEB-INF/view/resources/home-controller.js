app.controller("HomeController",function($scope, userService ) {
    $scope.users = [];
    $scope.currentUser = {id : 0, name : "Name", username : "Username", password : "Password", age : 0 };
    $scope.modalVisible = false;



    $scope.manageModal = function () {
        var point = document.getElementById('point');
        point.click();

    }

    $scope.saveUser = function() {
       var promise = userService.saveUser($scope.currentUser);
        promise.then(function (data) {
            console.log(data);
            console.log("success!!!");
            userService.loadUsers(successGet, error());
        });
    }

    $scope.getAll = function () {
        userService.loadUsers().then(function(data){
            $scope.users = data;
        },function (error) {
            console.log(error);
        });
    }
    $scope.saveUser = function () {
        userService.createUser($scope.currentUser).then(function(data){
            $scope.getAll();
            $scope.manageModal();
        },function (error) {
            console.log(error);
        });
    }
    $scope.getAll();

});
