canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");

car_racing_game_image_array=["racing.jpg"];
var random_number=Math.floor(Math.random()*5);
console.log(random_number);

car_width=100;
car_height=90;

car_x=10;
car_y=10;

car_width2=100;
car_height2=90;

car_x2=10;
car_y2=120;

background_image=car_racing_game_image_array[random_number];
console.log("background_image="+background_image)
car_image="car1.png";
car_image2="car2.png";

function plus(){
    imgtag=new Image();
    imgtag.onload=uploadBackground;
    imgtag.src=background_image;

    carimgtag=new Image();
    carimgtag.onload=uploadcar;
    carimgtag.src=car_image;

    carimgtag2=new Image();
    carimgtag2.onload=uploadcar2;
    carimgtag2.src=car_image2;

}

function uploadBackground(){
    ctx.drawImage(imgtag,0,0,canvas.width,canvas.height);
}

function uploadcar(){
    ctx.drawImage(carimgtag,car_x,car_y,car_width,car_height);
}

function uploadcar2(){
    ctx.drawImage(carimgtag2,car_x2,car_y2,car_width2,car_height2);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
key_pressed=e.keyCode;
console.log(key_pressed);

if(key_pressed=='38'){
     up();
console.log("up");
}
if(key_pressed=='40'){
    down();
    console.log("down");
}
if(key_pressed=='37'){
    left();
    console.log("left");
}
if(key_pressed=='39'){
    right();
    console.log("right");
}
if(key_pressed=='65'){
    left2();
    console.log("a");
}
if(key_pressed=='68'){
    right2();
    console.log("d");
}
if(key_pressed=='83'){
    down2();
    console.log("s");
}
if(key_pressed=='87'){
    up2();
    console.log("w");
}
}

function up(){
    if(car_y>=0){
    car_y=car_y - 10;
    console.log("When up arrow is pressed, x="+car_x+ " y="+car_y);
    uploadBackground();
    uploadcar();
    uploadcar2();
    }
}

function down(){
    if(car_y<=500){
    car_y=car_y + 10;
    console.log("When down arrow is pressed, x="+car_x+ " y="+car_y);
    uploadBackground();
    uploadcar();
    uploadcar2();
    }
}

function left(){
    if(car_x>=0){
    car_x=car_x - 10;
    console.log("When left arrow is pressed, x="+car_x+ " y="+car_y);
    uploadBackground();
    uploadcar();
    uploadcar2();
    }
}

function right(){
    if(car_x<=700){
    car_x=car_x + 10;
    console.log("When right arrow is pressed, x="+car_x+ " y="+car_y);
    uploadBackground();
    uploadcar();
    uploadcar2();
    }
}

function up2(){
    if(car_y2>=0){
    car_y2=car_y2 - 10;
    console.log("When up arrow is pressed, x="+car_x2+ " y="+car_y2);
    uploadBackground();
    uploadcar();
    uploadcar2();
    }
}

function down2(){
    if(car_y2<=500){
    car_y2=car_y2 + 10;
    console.log("When down arrow is pressed, x="+car_x2+ " y="+car_y2);
    uploadBackground();
    uploadcar();
    uploadcar2();
    }
}

function left2(){
    if(car_x2>=0){
    car_x2=car_x2 - 10;
    console.log("When left arrow is pressed, x="+car_x2+ " y="+car_y2);
    uploadBackground();
    uploadcar();
    uploadcar2();
    }
}

function right2(){
    if(car_x2<=700){
    car_x2=car_x2 + 10;
    console.log("When right arrow is pressed, x="+car_x2+ " y="+car_y2);
    uploadBackground();
    uploadcar();
    uploadcar2();
    }
}
