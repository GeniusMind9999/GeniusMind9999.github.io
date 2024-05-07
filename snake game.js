const key_pressed = document.getElementById("my-snake-key");
const snake = document.getElementById("snake");

document.addEventListener("keydown", function(event){
    key_pressed.textContent = `row: ${snake.style.gridRow}, column: ${snake.style.gridColumn}`;
    if (event.key == "ArrowUp" && snake.style.gridRow > 0){
        snake.style.gridRow--;
    }else if (event.key == "ArrowDown" && snake.style.gridRow < 20){
        snake.style.gridRow++;
    }else if (event.key == "ArrowLeft" && snake.style.gridColumn > 0){
        snake.style.gridColumn--;
    }else if (event.key == "ArrowRight" && snake.style.gridColumn < 20){
        snake.style.gridColumn++;
    }
    /*
    switch (event.key){
        case "ArrowUp":
            snake.style.gridRow--;
            break;
        case "ArrowDown":
            snake.style.gridRow++;
            break;
        case "ArrowLeft":
            snake.style.gridColumn--;
            break;
        case "ArrowRight":
            snake.style.gridColumn++;
            break;
    }*/
});