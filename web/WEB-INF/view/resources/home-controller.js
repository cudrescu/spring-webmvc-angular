app.controller("HomeController",function($scope, userService ) {
    $scope.users = [];
    $scope.currentUser = {id : 0, name : "Name", username : "Username", password : "Password", age : 0 };
    $scope.modalVisible = false;



    $scope.manageModal = function () {
        var point = document.getElementById('point');
        point.click();

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
            $scope.currentUser = {id : 0, name : "Name", username : "Username", password : "Password", age : 0 };
        },function (error) {
            console.log(error);
        });
    }

    $scope.triggerUpdate = function(user) {
        console.log(user);
        $scope.currentUser = user;
        console.log($scope.currentUser);
        $scope.manageModal();
    }

    $scope.updateUser = function () {
        userService.updateUser($scope.currentUser).then(function(data){
            $scope.getAll();
            $scope.manageModal();
            $scope.currentUser = {id : 0, name : "Name", username : "Username", password : "Password", age : 0 };
        },function (error) {
            console.log(error);
        });
    }

    $scope.deleteUser = function (id) {
        userService.deleteUser(id).then(function(data){
            $scope.getAll();
        },function (error) {
            console.log(error);
        });
    }
    $scope.getAll();

});
