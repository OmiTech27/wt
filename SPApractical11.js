//Single page Application of fruits benefit
<!DOCTYPE html>
<html>
<script
src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angularroute.js"></script>
<body ng-app="myApp">
<H1>Home Page of fruits benefits </h1>

<a href="#!banana">Banana</a>
<a href="#!papaya">Papaya</a>
<a href="#!Mango">Mango</a>
<a href="#!Apple">Apple</a>
<a href="#!Orange">Orange</a>

<p>Click on the links to show benefits of fruits.</p>
<div ng-view></div>
<script>
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
 $routeProvider
 .when("/banana", {
 template : "<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
 })
 .when("/papaya", {
 template : "<h1>Papaya</h1><p>Papaya contain around 65% water.</p>"
 })
 .when("/Mango", {
 template : "<h1>Mango</h1><p>Mango contain around 90% water.</p>"
 })
 .when("/Apple", {
 template : "<h1>Apple</h1><p>Apple contain around 85% water.</p>"
 })
 .when("/Orange", {
 template : "<h1>Orange</h1><p>orange contain around 95% water.</p>"
 })
 .otherwise({
 template : "<h1>Nothing</h1><p>Nothing has been selected</p>"
 });
});
</script>
</body>
</html>


////////////////////////////////////////////////



WAP to create Hotels Menu using single page application
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>
<div ng-app="myApp" ng-controller="myCtrl">
<body style="background-color:pink;">
<h1> Welcome to MyFrolic </h1>
<button ng-click="myFunc()">CLICK FOR STARTER</button>
<button ng-click="myFunc1()">CLICK FOR MAIN COURSE</button>
<button ng-click="myFunc2()">CLICK FOR MAIN SWEETS & DESSERTS</button>
<h3 style="color:red;">
<div ng-show="showMe">
<h1>MyRasoi Menu & Price of Starter :</h1>
<div>Burger - 100Rs.</div>
<div>Pizza -200Rs.</div>
<div>Pasta -250Rs.</div>
<div>Pav Bhaji-140Rs.</div>
<div>Sandwich -120Rs.</div>
</div>
<h3 style="color:blue;">
<div ng-show="showMe1">
<h1>MyRasoi Menu & Price of Main Course :</h1>
<div>Paneer Tikka - 100Rs.</div>
<div>Mashroom -200Rs.</div>
<div>Veg.Kolhapuri -250Rs.</div>
<div>Roti(4)-140Rs.</div>
<div>Rice -120Rs.</div>
</div>
<h3 style="color:blue;">
<div ng-show="showMe2">
<h1>MyRasoi Menu & Price of Sweets & Desserts :</h1>
<div>Jalebi - 100Rs.</div>
<div>Ice-creame -200Rs.</div>
<div>Faluda -250Rs.</div>
<div>fruit desserts-140Rs.</div>
</div>
<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
$scope.showMe = false;
$scope.myFunc = function() {
$scope.showMe = !$scope.showMe;
 $scope.showMe1 = false;
$scope.myFunc1 = function() {
$scope.showMe1 = !$scope.showMe1;
}
$scope.showMe2 = false;
$scope.myFunc2 = function() {
$scope.showMe2 = !$scope.showMe2;
}
});
</script>
<p>Click the button to to show Menu.</p>
</body>
</html>
