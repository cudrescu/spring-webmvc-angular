app.service("userService", function( $http, $q ) {
        var factory = {
            loadUsers: fetchAllUsers,
            createUser: createUser,
            updateUser:updateUser,
            deleteUser:deleteUser
        };
        return factory;

    function createUser(user) {
        var deferred = $q.defer();
        $http.post("/users/addUser",user)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('Error while adding Users');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function fetchAllUsers() {
        var deferred = $q.defer();
        $http.get("/users/")
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('Error while fetching Users');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }
    function updateUser(user) {
        var deferred = $q.defer();
        $http.put("/users/updateUser",user)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('Error while fetching Users');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }
    function deleteUser(id) {
        var deferred = $q.defer();
        $http.delete("/users/deleteUser/"+id)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('Error while fetching Users');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    }
);