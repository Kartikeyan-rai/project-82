var canvas=document.getElementById("my-canvas");
var ctx=canvas.getContext("2d");
var color="red";
var line_width=2;
var last_x,last_y;
var current_x,current_y;
var width=screen.width;
var new_width=width-80;
var new_height=screen.height-200;
if (width < 992)
{canvas.width=new_width;
    canvas.height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e)
{console.log("touch start");
last_x=e.touches[0].clientX-canvas.offsetLeft;
last_y=e.touches[0].clientY-canvas.offsetTop;
color=document.getElementById("color").value;
line_width=document.getElementById("line-width").value;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e)
{var current_x=e.touches[0].clientX-canvas.offsetLeft;
var current_y=e.touches[0].clientY-canvas.offsetTop;
console.log("touchmove");
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=line_width;
console.log("Last position of x and y coordinates = ");
console.log("x = " + last_x + "y = " + last_y);
ctx.moveTo(last_x,last_y);
console.log("current position of x and y coordinates = ");
console.log("x = " + current_x + "y = " + current_y);
ctx.lineTo(current_x,current_y);
ctx.stroke();
last_x=current_x;
last_y=current_y;}
function cleararea()
{ctx.clearRect(0,0,canvas.width,canvas.height);}
