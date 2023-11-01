/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/
"use strict";
window.onload = function() {
        var done=false;
        amsr();
        function amsr(){
                
            Swal.fire(
                 "Save the cute dino 🦖 from extinction! Ready?"
              )
        }
        function main(){
            //resizes page to fit any screen
            var res_y=window.screen.availHeight;
            var res_x=window.screen.availWidth;
            var coeff; 
            if (res_x*330>res_y*380)
                coeff=res_y/330;
            else
                coeff=res_x/380;
            document.getElementById("div").style.transform="scale("+coeff+")";
            //references elements
            const canvas=document.getElementById("Canvas");
            const con=canvas.getContext("2d");
            const jumpbutton = document.getElementById("jump");
            //paints canvas on first run
            const grd=con.createLinearGradient(0,65,0,180);
            grd.addColorStop(0, '#7ec0ee');
            grd.addColorStop(1, '#ffffff');
            con.fillStyle=grd;
            con.fillRect(0,0,360,180);
            const grd1=con.createRadialGradient(340,20,5,340,20,45);
            grd1.addColorStop(0, '#ffff80');
            grd1.addColorStop(1, '#7ec0ee');
            con.arc(340,20,45,0,2*Math.PI);
            con.fillStyle=grd1;
            con.fill();
            con.scale(3,3); //scales canvas
            //creates 2d array of a given size
            function createarray(y,x){
                var data = new Array(y);
                for(var i=0;i<y;++i) data[i]=new Array(x);
                return data;
            }
            //variables
            var score=0, oscillator=0, speed=3, jumptrigger=false, up=false, afloat=0, dir=-6, objects=[];
            var dino1=createarray(15,14);
            var dino2=createarray(15,14);
            var dino3=createarray(15,14);
            var cloud1=createarray(5,15); 
            var cloud2=createarray(7,20);
            var cactus1=createarray(13,8);
            var cactus2=createarray(10,11);
            var bird1=createarray(11,15);
            var bird2=createarray(11,15);
            var str_dino1='00000000011110 00000000110111 00000000111111 00000000111110 00000001111000 10000011111000 11001111111110 11111111111010 11111111111000 01111111110000 00111111100000 00011111000000 00011010000000 00010010000000 00011011000000';
            var str_dino2='00000000011110 00000000110111 00000000111111 00000000111110 00000001111000 10000011111000 11001111111110 11111111111010 11111111111000 01111111110000 00111111100000 00011111000000 00011010000000 00010011000000 00011000000000';
            var str_dino3='00000000011110 00000000110111 00000000111111 00000000111110 00000001111000 10000011111000 11001111111110 11111111111010 11111111111000 01111111110000 00111111100000 00011111000000 00010010000000 00011010000000 00000011000000';
            var str_cloud1='000000111000000 000011111110000 001111111111100 111111111111111 011111111111110';
            var str_cloud2='00000011100000000000 00001111111000000000 00111111111110000000 11111111111111110000 01111111111111111100 00000111111111111111 00000011111111111110';
            var str_cactus1='00011000 00011000 00011000 00011010 01011011 11011011 11011011 11111111 01111110 00011000 00011000 00011000 00011000';
            var str_cactus2='00100000100 00100000100 00101010101 10101010101 10101011101 10111000101 11100000111 00100000100 00100000100 00100000100';
            var str_bird1='000000100000000 000000110000000 000100111000000 001010111100000 011111111110000 111111111111111 000001111111100 000000111111110 000000011100000 000000000000000 000000000000000';
            var str_bird2='000000000000000 000000000000000 000100000000000 001010000000000 011111111110000 111111111111111 000000111111100 000000111111110 000000111000000 000000110000000 000000100000000';
            var beep=new Audio("data:audio/mpeg;base64,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");
            //populates the arrays
            function initarray(array, str){
                var x=0,y=0;
                [...str].forEach(char => {  
                    if(char !== ' '){
                        array[y][x]=parseInt(char);
                        x++;
                        if(x==array[y].length){
                            y++;
                            x=0;
                        }
                    }
                });
            }
            initarray(dino1, str_dino1);
            initarray(dino2, str_dino2);
            initarray(dino3, str_dino3);
            initarray(cloud1, str_cloud1);
            initarray(cloud2, str_cloud2);
            initarray(cactus1, str_cactus1);
            initarray(cactus2, str_cactus2);
            initarray(bird1, str_bird1);
            initarray(bird2, str_bird2);
            //objects
            var t_rex={
                pos:{x:2,y:45},
                data:dino1,
                color:'#608c5a'
            };
            var cloud={
                pos:{x:18,y:8},
                data:cloud1,
                color:'#d9dfe2'
            };
            var clouds={
                pos:{x:50,y:2},
                data:cloud2,
                color:'#d9dfe2'
            };
            //draws given object
            function drawobject(obj){
                for (var y=0; y<obj.data.length; ++y){
                    for (var x=0; x<obj.data[y].length; ++x){
                        if(obj.data[y][x]){
                            con.fillStyle = obj.color;
                            con.fillRect(x+obj.pos.x,y+obj.pos.y,1,1);
                        }
                    }
                }
            }
     
            //updates the canvas and its elements
            function draw(){
                con.clearRect(0,0,canvas.width,canvas.height);
                //repaints canvas on refresh
                con.scale(1/3,1/3);
                const grd=con.createLinearGradient(0,65,0,180);
                grd.addColorStop(0, '#7ec0ee');
                grd.addColorStop(1, '#ffffff');
                con.fillStyle=grd;
                con.fillRect(0,0,360,180);
                const grd1=con.createRadialGradient(340,20,5,340,20,45);
                grd1.addColorStop(0, '#ffff80');
                grd1.addColorStop(1, '#7ec0ee');
                con.arc(340,20,45,0,2*Math.PI);
                con.fillStyle=grd1;
                con.fill();
                con.scale(3,3);
                //draw elements
                drawobject(t_rex); 
                drawobject(cloud);
                drawobject(clouds);
                for(var i=0; i<=2; ++i){
                    drawobject(objects[i]);
                }
            }
            //spawns the next object
            function spawn(prev){
                switch(Math.floor(Math.random()*3)+1){
                    case 1:
                        next=prev+Math.floor(Math.random()*71)+60;
                        return {
                            name:'cactus',
                            pos:{x:next,y:47},
                            data:cactus1,
                            color:'#3b8761'
                        };
                        break;
                    case 2:
                        next=prev+Math.floor(Math.random()*71)+60;
                        return {
                            name:'cacti',
                            pos:{x:next,y:50},
                            data:cactus2,
                            color:'#3b8761'
                        };
                        break;
                    case 3:
                        next=prev+Math.floor(Math.random()*71)+60;
                        return {
                            name:'pterosaur',
                            pos:{x:next,y:((Math.floor(Math.random()*3)+1)*15)},
                            data:bird1,
                            color:'#582314'
                        };
                        break;
                }
            }
            //initializes the array of objects
            var next=0;
            for(var i=0; i<=2; ++i){
                objects.push(spawn(next));
            }
            //moves the objects
            function move(){
                for(var i=0; i<=2; ++i){
                    objects[i].pos.x-=speed;
                }
            }
            //replaces objects when they go out of scope
            function replace(){
                if(objects[0].pos.x+objects[0].data[0].length<=0){
                    objects.shift();
                    objects.push(spawn(objects[1].pos.x));
                }
            }
            //makes the dino walk
            function walk(){
                if (!up){
                    if (t_rex.data==dino1 || t_rex.data==dino2){
                        t_rex.data=dino3;
                    } else{
                        t_rex.data=dino2;
                    }
                }
            }
            //makes the dino jump
            function jump(){
                t_rex.data=dino1;
                up=true;
                t_rex.pos.y+=dir;
                if(t_rex.pos.y==27 && dir==-6){    //makes t rex slower as he jumps
                    dir=-4;
                }
                if(t_rex.pos.y==11){    //makes t rex stay still at maximum height
                    dir=0;
                    afloat++;
                }
                if(afloat>=2){    //makes t rex fall
                    dir=4;
                    afloat=0;
                }
                if(t_rex.pos.y==27 && dir==4){    //makes t rex faster as he falls
                    dir=6;
                }
                if(t_rex.pos.y+t_rex.data.length==60 && dir==6){    //makes t rex land
                    jumptrigger=false;
                    dir=-6;
                    up=false;
                }
            }


/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/

            //makes the pterodactyl fly
            function fly(){
                for(var i=0; i<=2; ++i){
                    if (objects[i].name=='pterosaur'){
                        if (objects[i].data==bird1){
                            objects[i].data=bird2;
                        } else{
                            objects[i].data=bird1;
                        }
                    }
                }
            }
            //checks collision between the dino and a given object
            function collisiondetection(obj){
                for (var y1=0; y1<t_rex.data.length; ++y1){
                    for (var x1=0; x1<t_rex.data[y1].length; ++x1){
                        if(t_rex.data[y1][x1]){
                            //loops through all elements in the t_rex object
                            for (var y2=0; y2<obj.data.length; ++y2){
                                for (var x2=0; x2<obj.data[y2].length; ++x2){
                                    if(obj.data[y2][x2]){
                                        //loops through all elements in the argument
                                        if((y1+t_rex.pos.y==y2+obj.pos.y)&&(x1+t_rex.pos.x==x2+obj.pos.x)){
                                            //checks if any two elements have collided
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return false;
            }
            //updates the score
            function scorerefresh(){
                score++;
                document.getElementById("score").innerText='Score: '+score;
                //makes the score label blink when level increases
                if(score>=100){
                    switch (score%100){
                        case 0:
                        case 2:
                        case 4:
                            document.getElementById("score").style.color="red";
                            canvas.style.border="1px solid red";
                            break;
                        default:
                            document.getElementById("score").style.color="teal";
                            canvas.style.border="1px solid teal";
                    }
                }
                //speeds up the game when level increases
                if(score==300 || score==600){
                    speed++;
                }
            }
            //ends the game when t rex dies
            function checkcollision(){
                for(var i=0; i<=2; ++i){
                    if (collisiondetection(objects[i])){
                        document.getElementById("score").innerText='GAME OVER!';
                        document.getElementById("score").style.color="red";
                        canvas.style.border="1px solid red";
                        navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate;
                        if(navigator.vibrate){
                            navigator.vibrate([120,60,120]);
                        }
                        document.getElementById("jump").innerText='play again';
                        con.scale(1/3,1/3);
                        stop=true;
                        done=true;
                    }
                }
            }
            //animates the game while locking the frame rate
            var stop = false, frameCount = 0, fpsInterval, startTime, now, then, elapsed;
            startAnimating(20);
            function startAnimating(fps) {
                fpsInterval = 1000 / fps;
                then = Date.now();
                startTime = then;
                animate();
            }
            function animate() {
                if (stop) {
                    return;
                }
                requestAnimationFrame(animate);
                now = Date.now();
                elapsed = now - then;
                if (elapsed > fpsInterval) {
                    then = now - (elapsed % fpsInterval);
                    //runs on each frame change
                    if(jumptrigger){
                        jump();
                    }
                    oscillator++;
                    if (oscillator==3){
                        walk();
                        fly();
                        scorerefresh();
                        oscillator=0;
                    }
                    move();
                    replace();
                    draw();
                    checkcollision();
                    //shows current frame rate
                    var sinceStart = now - startTime;
                    var currentFps = Math.round(1000 /(sinceStart / ++frameCount) * 100) / 100;
                    document.getElementById("fps").innerText='FPS: '+currentFps;
                }
            }
            //event listener(s)
            jumpbutton.addEventListener("click", onJump, false);
            //event handler(s)
            function onJump () {
                if (done){
                    done=false;
                    document.getElementById("jump").innerText='jump';
                    document.getElementById("score").style.color="teal";
                    canvas.style.border="1px solid teal";
                    main();
                } else{
                    if (!up){
                        beep.play();
                    }
                    jumptrigger=true;
                }
            }
        }
        main();
}

/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/