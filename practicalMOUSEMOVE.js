//Program based on mouse Move
Practical No-10
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
<body>
<div ng-app="myApp" ng-controller="myCtrl">
<h3 ng-mousemove="count = count + 1"> TO CHECK OUTPUT, PUT CURSOR ON ME (TEXT)
</h3>
<h2>{{ count }}</h2>
</div>
<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
$scope.count = 0;
});
</script>
</body>
</html>


/////////////////////////////////////////////


Program of Angular to show Mouse Position
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
<style>
.redDiv {
text-align:center;
width: 200px;
height: 80px;
background-color: red;
padding:4px 4px 4px 4px;
}
.greenDiv {
text-align:center;
width:200px;
height: 80px;
background-color: green;
padding:4px 4px 4px 4px;
}
.yellowDiv {
text-align:center;
width:200px;
height: 80px;
background-color: yellow;
padding:4px 4px 4px 4px;
}
</style>
</head>
<body ng-app>
<h1>AngularJS Mouse Events of Traffic Signal: </h1>
<div ng-class="{redDiv: enter, greenDiv: leave, yellowDiv :alert}"
ngmouseenter="enter=true;leave=false;alert=false" ng-mouseleave="leave=true;enter=false;alert=false"
ngclick="leave=false;enter=false;alert=true" >
<h3>
Status of Traffic Signal <span ng-show="enter">Enter</span> <span ng-show="leave">Leave</span>
<span
ng-show="alert">Alert</span>
</div>
</body>
</html>


///////////////////////////////////////


Program of Angular to show display message.
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>
<body ng-app="myApp" >
<h1>AngularJS ng-click Demo: </h1>
<div ng-controller="myController">
Enter Password: <input type="password" ng-model="password" /> <br /><br />
<button ng-click="DisplayMessage(password)"> SHOW MY PASSWORD</button
</div>
<script>
var myApp = angular.module('myApp', []);
myApp.controller("myController", function ($scope, $window) {
$scope.DisplayMessage = function (value) {
alert(value)
}
});
</script>
</body>
</html>



///////////////////////



Button Click Event
<!DOCTYPE html>
<html ng-app="myModule">
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.16/angular.min.js"></script>
</head>
<body style="font-family:Arial; font-size:medium; color:darkred">
<div ng-controller="MyController">
<h2>Click Me For Surprise</h2>
<input type="button" value="Click Me!" ng-click="ClickFunc()"/>
<br/>
<br/>
<h1><div ng-bind="Message"></div>
</div>
<script>
var app = angular.module('myModule', [])
app.controller('MyController', function ($scope)
{
$scope.ClickFunc = function ()
{
$scope.Message = "Wish you Happy Birthday."
}
});
</script>
</body>
</html>



/////////////////////////////////////////////


