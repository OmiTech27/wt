//Basic Angular Example
<!DOCTYPE html>
<html>
<head>
<title>AngularJS First Application</title>
</head>
<body>
<h1>Example # 1: Angular JS</h1>
<div ng-app = "">
<p>Enter your Name: <input type = "text" ng-model = "name"></p>
<p>Hello Digital Environmental Planet <span ng-bind = "name"></span>!</p>
</div>
<script src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js">
</script>
</body>
</html>

//////////////////////////////////////////////

AngularJS Directives
<!DOCTYPE html>
<html>
<head>
<title>AngularJS First Application</title>
</head>
<body>
<h1>Example #2 : ng-init</h1>
<div ng-app="" ng-init="firstName='Management of Buisness School'">
<p>College course is: <span ng-bind = "firstName"></span>!</p>
</div>
<script src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js">
</script>
</body>
</html>


/////////////////////////////////////////


AngularJS Expressions
<!DOCTYPE html>
<html>
<head>
<title>BASICS OF ANGULAR</title>
</head>
<body>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
<h1> Simple Addition program using Angular js</h1>
<div ng-app="">
<h2> Addition: {{6+8}} <h2>
</div>
</body>
</html>


///////////////////////////////////////////////////////


Simple Program of addition using text field in Angular js
<!DOCTYPE html>
<html>
<head>
<title>First AngularJS Application</title>
<script src= "https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>
<body ng-app >
<h1>MY First AngularJS Calculator </h1>
Enter Numbers to Addition:
<input type="number" ng-model="Num1" /> + <input type="number" ng-model="Num2" />
= <span>{{Num1 + Num2}}</span>
</body>
</html>


//////////////////////////////////////////////////////

Program of simple Interest using Angular j
<!DOCTYPE html>
<html>
<head>
<title>Angular Js Basic Program 1</title>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js">
</script>
</head>
<body>
<h1> EXAMPLE#3 </h1>
<div ng-app="">
Enter Principle Amount: <input type="number" ng-model="num1"/><br>
Enter Rate of Interest :<input type="number" ng-model="num2"/><br>
Enter Time period :<input type="number" ng-model="num3"/><br>
Interest Earned =<span>{{(num1 * num2 * num3 )/100}}</span>
</body>
</html>


///////////////////////////


Program of Simple Calculator using Angular js
<!DOCTYPE html>
<html>
<head>
<title>First AngularJS Application</title>
<script src= "https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>
<body style="background-color:grey;"></body>
<body ng-app >
<h1>MY First AngularJS Calculator </h1>
<br> Enter Numbers to Addition:
<input type="number" ng-model="Num1" /> + <input type="number" ng-model="Num2" />
= <span>{{Num1 + Num2}}</span> </br>
<br>
Enter Numbers to Multiply:
<input type="number" ng-model="Num3" /> x <input type="number" ng-model="Num4" />
= <span>{{Num3 * Num4}}</span> </br>
<br>
Enter Numbers to Subtraction:
<input type="number" ng-model="Num5" /> - <input type="number" ng-model="Num6" />
= <span>{{Num5 - Num6}}</span></br>
<br>
Enter Numbers to Division:
<input type="number" ng-model="Num7" /> / <input type="number" ng-model="Num8" />
= <span>{{Num7 / Num8}}</span></br>
</body>
</html>



//////////////////////////////////////////////////////////////



Program on Modules and Controllers in Files
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
<body>
<div ng-app="myApp" ng-controller="myCtrl">
First Name: <input type="text" ng-model="firstName"><br>
Last Name: <input type="text" ng-model="lastName"><br>
<br>
Full Name: {{firstName + " " + lastName}}
</div>
<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
$scope.firstName= "";
$scope.lastName= "";
});
</script>
</body>
</html>

///////////////////////////////////////////////////////


Program of Simple Calculator using Angular js
HTML FILE:
<!DOCTYPE html>
<script src= "https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
<script src= "calculator.js"></script>
<div ng-app="CalculatorApp" ng-controller="CalculatorController">
<p><input type="number" ng-model="a"></p>
<p><input type="number" ng-model="b"></p>
<p><select ng-model="operator">
<option>+</option>
<option>*</option>
<option>-</option>
<option>/</option>
</select></p>
<p>{{ result() }}</p>
</div>


calculator.js
angular.module('CalculatorApp', [])
.controller('CalculatorController', function($scope) {
$scope.result = function() {
if ($scope.operator == '+') {
return $scope.a + $scope.b;
}
if ($scope.operator == '-') {
return $scope.a - $scope.b;
}
if ($scope.operator == '*') {
return $scope.a * $scope.b;
}
if ($scope.operator == '/') {
return $scope.a / $scope.b;
}
};
});

////////////////////////////////////////////////////

Program of Switch case using Angular js
<!DOCTYPE html>
<html>
<head>
<title>
AngularJs ng-switch Directive Example
</title>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<script>
var app = angular.module("AngularswitchApp", []);
app.controller("ngswitch", function ($scope) {
$scope.items = ['Jan', 'Feb', 'Mar', 'Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
$scope.selectval = "Jan";
});
</script>
</head>
<body ng-app="AngularswitchApp">
<body style="background-color:yellow;">
<h2 style="background-color:RED;"><p style="text-align:center;"> AngularJS ng-switch
Example</h2>
<div ng-controller="ngswitch">
Select Month: <select ng-model="selectval" ng-options="item for item in items">
</select>
<div ng-switch on="selectval">
<div ng-switch-when="Jan"> <h3 style="text-align:center;"> <b>JAN 2022</b>: 26th Jan -
Republic Day</div>
<div ng-switch-when="Feb"> <h3 style="text-align:center;"> <b>FEB 2022</b>: 19th FebChattrapati
Shivaji Maharaj Jayanti</div>
<div ng-switch-when="Mar"> <h3 style="text-align:center;"> <b>MAR 2022</b>: 18th
Mar-Holi</div>
<div ng-switch-when="Apr"> <h3 style="text-align:center;"> <b>APR 2022</b>: 2nd AprGudi
Padwa</div>
<div ng-switch-when="May"> <h3 style="text-align:center;"> <b>MAY 2022</b>: 1st MayMaharashtra
Day</div>
<div ng-switch-when="June"> <h3 style="text-align:center;"> <b>JUN 2022</b>: No
Festival</div>
<div ng-switch-when="July"> <h3 style="text-align:center;"> <b>JULY 2022</b>: 9th JulyEid</div>
<div ng-switch-default>You are in default switch case.</div>
</div>
</body>
</html>
  
  //////////////////////////////////////////////////////////////////////
  
  
  Program of lowercase & uppercase using Angular js.
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min.js"></script>
</head>
<body style="background-color:blue;">
<div ng-app
<label><h2>Type some text for Uppercase & Lowercase</h2> </label>
<input type="text" ng-model="Mytext" />
</p>
<h3><p> Uppercase : {{ Mytext | uppercase }} </p>
<h3> <p> Lowercase : {{ Mytext | lowercase }} </p>
</div>
</body>
</html>


//////////////////////////


Program of Angular JS Number Filter Example
<!DOCTYPE html>
<html>
<head>
<title>
AngularJs number filter Example
</title>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
<script>
var app = angular.module("AngularnumberApp", []);
app.controller("numberctrl", function ($scope) {
$scope.sampleval = 67000.25;
});
</script>
</head>
<body ng-app="AngularnumberApp">
<h2>AngularJS Number Filter Example</h2>
<div ng-controller="numberctrl">
Enter Number: <input type="text" ng-model="sampleval" /><br /><br />
Default Number expression:{{sampleval | number}}<br /><br />
Number with Decimal Value: {{sampleval | number:4}} <br /><br />
Number with Zero Decimals:{{sampleval | number:0}}
</div>
</body>
</html>



///////////////////////////



Program of Angular JS Currency Converter.
<!DOCTYPE html>
<html>
<head>
<title>
AngularJs Currency converter Example
</title>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
<script>
var app = angular.module("AngularcurrencyApp", []);
app.controller("currencyctrl", function ($scope) {
$scope.sampleval1 = 100000;
$scope.sampleval2 = 50000;
$scope.perdollar = 75;
});
</script>
</head>
<body ng-app="AngularcurrencyApp">
<h2>AngularJS Currency converter Example</h2>
<div ng-controller="currencyctrl">
Enter Rupees: <input type="text" ng-model="sampleval1" /><br /><br />
Currency in Dollar: {{sampleval1/perdollar | currency : "USD$ ":0}} <br /><br />
Currency in Indian Rupees: {{sampleval1 | currency : "Rs" : 2}}<br /><br />
Enter Dollar: <input type="text" ng-model="sampleval2" /><br /><br />
Currency in Indian Rupees: {{sampleval2*perdollar | currency : "Rs ":2}} <br /><br />
Currency in Dollar : {{sampleval2 | currency : "USD$ " : 0}}<br /><br />
</div>
</body>
</html>


/////////////////////////////////////////////////////////////////


Program of Angular JS Checkbox.
<!DOCTYPE html>
<html>
<head>
<title>
AngularJs Show / Hide Checkbox element content
</title>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>
<body ng-app="">
<div>
<h2>AngularJS Show / Hide Joke with Checkbox</h2>
Show / Hide Div <input type="checkbox" ng-model="chkselct"><br /><br />
<div style="padding:50px;
border:1px solid red;
background-color: #09c;
width:70%;
font-weight:bold"
ng-show='chkselct'> There are two types of JAVA MarJAVA & MitJAVA </div>
</div>
</body>
</html>



//////////////////////////////////////






