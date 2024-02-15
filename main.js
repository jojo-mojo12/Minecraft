var canvas = new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 10;
blockimagewidth = 30;
blockimageheight = 30;
var player_object = "";
var blockimageobject = "";
function player_update(){
fabric.Image.fromURL("player.png",function(Img){
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:player_y,
    left:player_x
});
canvas.add(player_object);
});
}

function new_image(get_image){
    fabric.Image.fromURL("player.png",function(Img){
    blockimageobject.scaleToWidth(blockimagewidth);
    blockimageobject.scaleToHeight(blockimageheight);
    blockimageobject.set({
        top:player_y,
        left:player_x
    });
    canvas.add(blockimageobject);
    });
};

window.addEventListener("keydown", my_Keydown);

function my_Keydown(e)
{
   keypressed = e.keyCode;
   console.log(keypressed);
   if (e.shiftKey == true && keypressed == "80")
   {
      console.log("Shift + P");
      blockimagewidth = blockimagewidth + 10;
      blockimageheight = blockimageheight + 10;
      document.getElementById("current_width").innerHTML=blockimagewidth;
      document.getElementById("current_height").innerHTML=blockimageheight;
   }
   if (e.shiftKey == true && keypressed == "77")
   {
      console.log("Shift + M");
      blockimagewidth = blockimagewidth - 10;
      blockimageheight = blockimageheight - 10;
      document.getElementById("current_width").innerHTML=blockimagewidth;
      document.getElementById("current_height").innerHTML=blockimageheight;
   }  
   if (keypressed == "38")
   {
      up();
      console.log("up");
   }
   
   if (keypressed == "40")
   {
      down();
      console.log("down");
   }

   if (keypressed == "37")
   {
      left();
      console.log("left");
   }
   
   if (keypressed == "39")
   {
      right();
      console.log("right");
   }
   if (keypressed == "87")
   {
    new_image("wall.jpg");
    console.log("W");
   }
   
   if (keypressed == "71")
   {
    new_image("ground.png");
    console.log("G");
   }
   
   if (keypressed == "76")
   {
    new_image("light_green.png");
    console.log("L");
   }
   
   if (keypressed == "84")
   {
    new_image("trunk.jpg");
    console.log("T");
   }
   
   if (keypressed == "82")
   {
    new_image("roof.jpg");
    console.log("R");
   }
   
   if (keypressed == "89")
   {
    new_image("yellow_wall.png");
    console.log("Y");
   }
   
   if (keypressed == "68")
   {
    new_image("dark_green.png");
    console.log("D");
   }
   
   if (keypressed == "85")
   {
    new_image("unique.png");
    console.log("U");
   }
   
   if (keypressed == "67")
   {
    new_image("cloud.jpg");
    console.log("C");
   }
}