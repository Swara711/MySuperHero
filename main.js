var canvas = new fabric.Canvas('myCanvas');
var block_img_width = 30;
var block_img_height = 30;
player_y = 10;
player_x = 10;
var player_object = "";
var block_image_object = "";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
player_object.set({
    top: player_y,
    left: player_x
});
canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL( get_image, function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_img_width);
        block_image_object.scaleToHeight(block_img_height);
block_image_object.set({
    top: player_y,
    left: player_x
});
canvas.add(block_image_object);
    });
    
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=='80'){
        console.log("p & shift pressed together");
        block_img_width = block_img_width+10;
        block_img_height = block_img_height+10;
        document.getElementById("current_height").innerHTML = block_img_height;
        document.getElementById("current_width").innerHTML = block_img_width;
    }
if(e.shiftKey==true && keypressed=='77'){
    console.log("m & shift pressed together");
    block_img_width = block_img_width-10;
    block_img_height = block_img_height-10;
    document.getElementById("current_width").innerHTML = block_img_width;
    document.getElementById("current_height").innerHTML = block_img_height;
}
if(keypressed=='38'){
    up();
    console.log("up");
}
if(keypressed=='40'){
    down();
    console.log("down");
}
if(keypressed=='37'){
    left();
    console.log("left");
}
if(keypressed=='39'){
    right();
    console.log("right");
}
if(keypressed=='87'){
   new_image('ironman_face.png');
   console.log("f");
}
if(keypressed== '71'){
    new_image('spiderman.body.png');
    console.log("b");
}
if(keypressed=='84'){
    new_image('hulk_legs.png');
    console.log("l");
}
if(keypressed=='68'){
    new_image('thor_right_hand.png');
    console.log("r")
}
if(keypressed=='76'){
    new_image('captain_america_left_hand.png');
    console.log("h");
}

}
function up(){
    if(player_y>=0){
        player_y = player_y - block_img_height;
        console.log("block image height = "+ block_img_height);
        console.log("when up arrow is pressed, X = "+ player_x + ", Y = "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<=500){
        player_y = player_y + block_img_height;
        console.log("block image height = "+ block_img_height);
        console.log("when down arrow is pressed, X = "+ player_x + ", Y = "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>0){
     player_x = player_x - block_img_width;
     console.log("block image width = "+ block_img_width);
     console.log("when left arrow is pressed, X = "+ player_x + ", Y = "+ player_y);
     canvas.remove(player_object);
     player_update();
    }
}
function right(){
    if(player_x<500){
        player_x = player_x + block_img_width;
        console.log("block image width = "+ block_img_width);
        console.log("when right arrow is pressed, X = "+ player_x + ", Y = "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}