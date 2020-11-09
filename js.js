var app = angular.module("onlineShopping", []);

app.controller("ctrl", function ($scope) {

 
    $scope.products = [

        { id: 0, name: "cips", price: 3.5 },
        { id: 1, name: "Kek", price: 1 },
        { id: 2, name: "çikolata", price: 1.5 },
        { id: 3, name: "çay", price: 2 },
        { id: 4, name: "su", price: 0.50 }
    ]

    
    $scope.myProducts = [];

    $scope.totalPrice = 0;


    $scope.addMyproducts = function (product) {

        $scope.totalPrice += product.price;

        if ($scope.myProducts.indexOf(product) == -1) {
           
            product.count = 1;
            $scope.myProducts.push(product);
        }
        else {
            $.each($scope.myProducts, function (index, item) {
                if (item.id == product.id) {
               
                    item.count++;
                }
            })
        }


    }


})