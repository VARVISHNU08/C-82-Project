canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "red";
width = "2";
radius = "1";

addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("npt_clr").value;
    width = document.getElementById("npt_wdth").value;
    radius = document.getElementById("npt_rds").value;
    mouseEvent = "mousedown";
}
    


addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouseEvent = "mouseup";
}

addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    mouseEvent = "mousemove";

    current_x_position = e.clientX - canvas.offsetLeft;
    current_y_position = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown"){
       console.log("Current position of X and Y = ");
       console.log("X = " + current_x_position + " | Y = " + current_y_position);

       ctx.beginPath();
       ctx.strokeStyle = color;
       ctx.lindWidth = width;
       ctx.arc(current_x_position, current_y_position, radius, 0, 2*Math.PI);
       ctx.stroke();
    }
}
