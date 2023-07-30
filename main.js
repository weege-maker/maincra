

var canvas = new fabric.canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object = "";

function player_update()
{
    fabric.image.fromURL("player.png", function(img) {
    player_object = img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);
    });
}
function new_image(get_image)
{
    fabric.image.fromURL(get_image, function(img) {
    block_image_object = img;

    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_image_object);
    });
}




function up()
{
    if(player_y >=0)
    {
        player_y = player_y - block_image_height;
        console.log("altura del bloque = " + block_image_height);
        console.log("cuando sew presiona la flecha hacia arriba, X = " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y <=500)
    {
        player_y = player_y + block_image_height;
        console.log("altura del bloque = " + block_image_height);
        console.log("cuando sew presiona la flecha hacia abajo, X = " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x >0)
    {
        player_x = player_x - block_image_width;
        console.log("ancho del bloque = " + block_image_width);
        console.log("cuando sew presiona la flecha izquierda, X = " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x <=850)
    {
        player_x = player_x + block_image_width;
        console.log("ancho del bloque = " + block_image_width);
        console.log("cuando sew presiona la flecha derecha, X = " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}