function disp(i,j)
{
console.log(i + " & " +j);
}
disp(100);
disp(100,300);
disp(100,300,599);

//

function volume(i,j,k)
{
var cube= i*j*k;
console.log(cube);
}
volume(100,56,1);
volume(100,200,52);
volume(100,23,599)

//
//npm install prompt-sync
var input=require('prompt-sync')();
var num1=input("Enter your Number1 : -");
var num2=input("Enter your Number2 : -");
var num3=input("Enter your Number3 : -");
function volume(num1,num2,num3)
• Function without Parameter:
{
var cube= num1*num2*num3;
console.log(cube);
}
volume(num1,num2,num3)

//without parameter
var input=require('prompt-sync')();
var num1=input("Enter your Number1 : -");
var num2=input("Enter your Number2 : -");
var num3=input("Enter your Number3 : -");
function volume()
{
var cube= num1*num2*num3;
console.log(cube);
}
volume()


//cube+rect+tri
function volumecube(a)
{
var cube=a*a*a;
console.log("Volume of Cube is : " +cube);
}
function volumeRect(l,h,w)
{
var Rect=l*h*w;
console.log("Volume of Rect is : " +Rect);
}
function volumetri(l,h,w)
{
var tri=0.5*l*h*w;
console.log("Volume of Tri is : " +tri);
}
volumecube(5);
volumeRect(1,2,3);
volumetri(4,5,6);
