var app = angular.module('helloworld', []);


app.controller('AppCtrl', function ($scope) {
    $scope.title = 'App Controller';
});

app.controller('PageCtrl', function ($scope) {
    $scope.title = 'Page Controller';
});

app.controller('FormCtrl', function ($scope) {
    $scope.title = "Form Controller";
    $scope.added = [];

    var i = 0;
    $scope.addTo = function () {
        $scope.added.push({"id":i, "txt":$scope.textToAdd});
        $scope.textToAdd = "";
        i++;
    };

    $scope.clear = function () {
        $scope.added = [];
        i = 0;
    }
});


//Barcode stuff ====================================================

app.controller('BarcodeCtrl', function ($scope) {
    $scope.title = 'Barcode scanner';
});

function scanBarcode () {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            alert("We got a barcode\n" +
            "Result: " + result.text + "\n" +
            "Format: " + result.format + "\n" +
            "Cancelled: " + result.cancelled);
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    );
}
































function onDeviceReady () {
    alert("Hello world");
}

