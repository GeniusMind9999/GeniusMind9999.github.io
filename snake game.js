document.addEventListener("DOMContentLoaded", function() {    
    const snake_head = document.getElementById("snake-head");
    const snake_tail = document.getElementById("snake-tail");
    const snake_body = document.getElementById("snake-body1");
    const up_btn = document.getElementById("up");
    const down_btn = document.getElementById("down");
    const left_btn = document.getElementById("left");
    const right_btn = document.getElementById("right");
    const apple = document.getElementById("apple");
    let up_pressed_time = 0;
    let snake_coords = [[snake_tail.style.gridRow, snake_tail.style.gridColumn], [snake_body.style.gridRow, snake_body.style.gridColumn], [snake_head.style.gridRow, snake_head.style.gridColumn]];
    let snake_parts = ["snake-tail", "snake-body1", "snake-head"];
    let snake_body_count = 1;
    for (let i = 0; i < snake_coords.length; i++){
        console.log(snake_coords[i]);
    }
    snake_direction = "Right";



    // For up motion:

    up_btn.addEventListener("mousedown", function() {
        up_pressed_time = setInterval(Up, 250);
    });

    up_btn.addEventListener("mouseup", function() {
        clearInterval(up_pressed_time);
    });

    up_btn.addEventListener("mouseleave", function() {
        clearInterval(up_pressed_time);
    });

    up_btn.addEventListener("click", function(){
        Up();
    })


    // For down motion:

    down_btn.addEventListener("mousedown", function() {
        up_pressed_time = setInterval(Down, 250);
    });

    down_btn.addEventListener("mouseup", function() {
        clearInterval(up_pressed_time);
    });

    down_btn.addEventListener("mouseleave", function() {
        clearInterval(up_pressed_time);
    });

    down_btn.addEventListener("click", function(){
        Down();
    })


    // For left motion:

    left_btn.addEventListener("mousedown", function() {
        up_pressed_time = setInterval(Left, 250);
    });

    left_btn.addEventListener("mouseup", function() {
        clearInterval(up_pressed_time);
    });

    left_btn.addEventListener("mouseleave", function() {
        clearInterval(up_pressed_time);
    });

    left_btn.addEventListener("click", function(){
        Left();
    })


    // For right motion:

    right_btn.addEventListener("mousedown", function() {
        up_pressed_time = setInterval(Right, 250);
    });

    right_btn.addEventListener("mouseup", function() {
        clearInterval(up_pressed_time);
    });

    right_btn.addEventListener("mouseleave", function() {
        clearInterval(up_pressed_time);
    });

    right_btn.addEventListener("click", function(){
        Right();
    })


    function Up(){
        if (snake_head.style.gridRow > 0){
            snake_direction = "up";
            snake_coords.push([snake_coords[snake_coords.length-1][0]-1, snake_coords[snake_coords.length-1][1]]);
            snake_coords.shift();
            for (let i = 0; i < snake_parts.length; i++){
                document.getElementById(snake_parts[i]).style.gridRow = snake_coords[i][0];
                document.getElementById(snake_parts[i]).style.gridColumn = snake_coords[i][1];
            }
            for (let i = 0; i < snake_parts.length; i++){
                console.log("snake parts: ", snake_parts[i]);
                console.log("snake coords: ", snake_coords[i]);
            }
            is_colliding()
            snake_coords = [[snake_tail.style.gridRow, snake_tail.style.gridColumn], [snake_body.style.gridRow, snake_body.style.gridColumn], [snake_head.style.gridRow, snake_head.style.gridColumn]];




            snake_head.style.borderBottomRightRadius = 0;
            snake_head.style.borderTopLeftRadius = "50%";
            snake_head.style.borderBottomLeftRadius = 0;
            snake_head.style.borderTopRightRadius = "50%";


            snake_head.style.borderLeftColor = "#00ffff";
            snake_head.style.borderBottomColor = "#2f55ff";
            snake_head.style.borderRightColor = "#00ffff";
            snake_head.style.borderTopColor = "#00ffff";




            snake_body.style.borderTopColor = "#2f55ff";
            snake_body.style.borderBottomColor = "#2f55ff";
            snake_body.style.borderLeftColor = "#00ffff";
            snake_body.style.borderRightColor = "#00ffff";




            snake_tail.style.borderTopLeftRadius = 0;
            snake_tail.style.borderTopRightRadius = 0;
            snake_tail.style.borderBottomRightRadius = "50%";
            snake_tail.style.borderBottomLeftRadius = "50%";


            snake_tail.style.borderTopColor = "#2f55ff";
            snake_tail.style.borderBottomColor = "#00ffff";
            snake_tail.style.borderRightColor = "#00ffff";
            snake_tail.style.borderLeftColor = "#00ffff";
        }
    }

    function Down(){
        if (snake_head.style.gridRow < 20){
            snake_direction = "down";
            snake_coords.push([parseInt(snake_coords[snake_coords.length-1][0])+1, snake_coords[snake_coords.length-1][1]]);
            snake_coords.shift();
            for (let i = 0; i < snake_parts.length; i++){
                document.getElementById(snake_parts[i]).style.gridRow = snake_coords[i][0];
                document.getElementById(snake_parts[i]).style.gridColumn = snake_coords[i][1];
            }
            for (let i = 0; i < snake_parts.length; i++){
                console.log("snake parts: ", snake_parts[i]);
                console.log("snake coords: ", snake_coords[i]);
            }
            is_colliding()
            snake_coords = [[snake_tail.style.gridRow, snake_tail.style.gridColumn], [snake_body.style.gridRow, snake_body.style.gridColumn], [snake_head.style.gridRow, snake_head.style.gridColumn]];
            



            snake_head.style.borderBottomRightRadius = "50%";
            snake_head.style.borderTopLeftRadius = "0%";
            snake_head.style.borderBottomLeftRadius = "50%";
            snake_head.style.borderTopRightRadius = "0%";


            snake_head.style.borderLeftColor = "#00ffff";
            snake_head.style.borderBottomColor = "#00ffff";
            snake_head.style.borderRightColor = "#00ffff";
            snake_head.style.borderTopColor = "#2f55ff";




            snake_body.style.borderTopColor = "#2f55ff";
            snake_body.style.borderBottomColor = "#2f55ff";
            snake_body.style.borderLeftColor = "#00ffff";
            snake_body.style.borderRightColor = "#00ffff";


            

            snake_tail.style.borderTopLeftRadius = "50%";
            snake_tail.style.borderTopRightRadius = "50%";
            snake_tail.style.borderBottomRightRadius = "0%";
            snake_tail.style.borderBottomLeftRadius = "0%";


            snake_tail.style.borderTopColor = "#00ffff";
            snake_tail.style.borderBottomColor = "#2f55ff";
            snake_tail.style.borderRightColor = "#00ffff";
            snake_tail.style.borderLeftColor = "#00ffff";
        }
    }

    function Left(){
        if (snake_head.style.gridColumn > 0){
            snake_direction = "left";
            snake_coords.push([snake_coords[snake_coords.length-1][0], snake_coords[snake_coords.length-1][1]-1]);
            snake_coords.shift();
            for (let i = 0; i < snake_parts.length; i++){
                document.getElementById(snake_parts[i]).style.gridRow = snake_coords[i][0];
                document.getElementById(snake_parts[i]).style.gridColumn = snake_coords[i][1];
            }
            for (let i = 0; i < snake_parts.length; i++){
                console.log("snake parts: ", snake_parts[i]);
                console.log("snake coords: ", snake_coords[i]);
            }
            is_colliding()
            snake_coords = [[snake_tail.style.gridRow, snake_tail.style.gridColumn], [snake_body.style.gridRow, snake_body.style.gridColumn], [snake_head.style.gridRow, snake_head.style.gridColumn]];
            



            snake_head.style.borderBottomRightRadius = "0%";
            snake_head.style.borderTopLeftRadius = "50%";
            snake_head.style.borderBottomLeftRadius = "50%";
            snake_head.style.borderTopRightRadius = "0%";


            snake_head.style.borderLeftColor = "#00ffff";
            snake_head.style.borderBottomColor = "#00ffff";
            snake_head.style.borderRightColor = "#2f55ff";
            snake_head.style.borderTopColor = "#00ffff";




            snake_body.style.borderTopColor = "#00ffff";
            snake_body.style.borderBottomColor = "#00ffff";
            snake_body.style.borderLeftColor = "#2f55ff";
            snake_body.style.borderRightColor = "#2f55ff";


            

            snake_tail.style.borderTopLeftRadius = "0%";
            snake_tail.style.borderTopRightRadius = "50%";
            snake_tail.style.borderBottomRightRadius = "50%";
            snake_tail.style.borderBottomLeftRadius = "0%";


            snake_tail.style.borderTopColor = "#00ffff";
            snake_tail.style.borderBottomColor = "#00ffff";
            snake_tail.style.borderRightColor = "#00ffff";
            snake_tail.style.borderLeftColor = "#2f55ff";
        }
    }

    function Right(){
        if (snake_head.style.gridColumn < 20){
            snake_direction = "right";
            snake_coords.push([snake_coords[snake_coords.length-1][0], parseInt(snake_coords[snake_coords.length-1][1])+1]);
            snake_coords.shift();
            for (let i = 0; i < snake_parts.length; i++){
                console.log("snake parts: ", snake_parts[i]);
                console.log("snake coords: ", snake_coords[i]);
            }
            for (let i = 0; i < snake_parts.length; i++){
                document.getElementById(snake_parts[i]).style.gridRow = snake_coords[i][0];
                document.getElementById(snake_parts[i]).style.gridColumn = snake_coords[i][1];
            }
            is_colliding()
            snake_coords = [[snake_tail.style.gridRow, snake_tail.style.gridColumn], [snake_body.style.gridRow, snake_body.style.gridColumn], [snake_head.style.gridRow, snake_head.style.gridColumn]];
            



            snake_head.style.borderBottomRightRadius = "50%";
            snake_head.style.borderTopLeftRadius = "0%";
            snake_head.style.borderBottomLeftRadius = "0%";
            snake_head.style.borderTopRightRadius = "50%";


            snake_head.style.borderLeftColor = "#2f55ff";
            snake_head.style.borderBottomColor = "#00ffff";
            snake_head.style.borderRightColor = "#00ffff";
            snake_head.style.borderTopColor = "#00ffff";




            snake_body.style.borderTopColor = "#00ffff";
            snake_body.style.borderBottomColor = "#00ffff";
            snake_body.style.borderLeftColor = "#2f55ff";
            snake_body.style.borderRightColor = "#2f55ff";


            

            snake_tail.style.borderTopLeftRadius = "50%";
            snake_tail.style.borderTopRightRadius = "0%";
            snake_tail.style.borderBottomRightRadius = "0%";
            snake_tail.style.borderBottomLeftRadius = "50%";


            snake_tail.style.borderTopColor = "#00ffff";
            snake_tail.style.borderBottomColor = "#00ffff";
            snake_tail.style.borderRightColor = "#2f55ff";
            snake_tail.style.borderLeftColor = "#00ffff";
        }
    }

    function is_colliding(){
        if (snake_head.style.gridColumn == apple.style.gridColumn && snake_head.style.gridRow == apple.style.gridRow) {
            console.log("Collided!!");
            apple.style.gridRow = RandomNumber(20,1);
            apple.style.gridColumn = RandomNumber(20,1);
            createNewBody();
        }
    }

    function createNewBody(){
        let new_body = document.createElement("div");
        new_body.className = "snake-body";
        new_body.id = "snake-body" + snake_body_count;
        snake_tail.insertAdjacentElement("beforebegin", new_body);
        snake_parts.push("snake-body"+snake_body_count);
        let game_container = document.getElementById("game-container");
        game_container.appendChild(new_body);
        snake_body_count++;
        if (snake_direction == "up"){
            new_body.gridRow = snake_tail.gridRow;
            snake_tail.gridRow++;
        } else if (snake_direction == "down") {
            new_body.gridRow = snake_tail.gridRow;
            snake_tail.gridRow--;
        } else if (snake_direction == "left"){
            new_body.gridRow = snake_tail.gridRow;
            snake_tail.gridRow++;
        } else if (snake_direction == "right") {
            new_body.gridRow = snake_tail.gridRow;
            snake_tail.gridRow--;
        }
    }

    function RandomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }});