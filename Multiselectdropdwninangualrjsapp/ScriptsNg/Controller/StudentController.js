
app.controller('StudentCtrl', ['$scope',function ($scope) {
  
    // data bind in multiselect dropdwn
    $scope.BidDepartments=function()
    { 
       //  create department list, if we want we call deparments form data base 
        var deparments = [{id: 1,
            label: 'Computer science engineering'
        }, {id: 2,
            label: 'Electrical & Electronics Engineering'
        }, {id: 3,
            label: 'Software engineering'
        }, {id: 4,
            label: 'Textile engineering'
        }];
        $scope.ListMultiProcessModel = [];
        $scope.Departments = deparments;
    }
    $scope.BidDepartments();
    
    // get data from multiselect dropdwn
    $scope.ShowSelectedDepartment=function()
    {
        // we can play with departments
        var departments = $scope.ListMultiProcessModel;
        for (i = 0; i < departments.length; i++) {
            alert(departments[i].id);
        }
    }

  
}]);