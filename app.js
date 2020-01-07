// ======================
let rover = {direction: "N",
             x: 0,
             y: 0, };



// ======================

function turnLeft(rover){
let currentDirection = rover.direction;
  switch(currentDirection){
    case "N": 
      rover.direction = "W";
      break; 
    case "W": 
      rover.direction = "S"; 
      break;
    case "S": 
      rover.direction = "E";
      break; 
    case "E": 
      rover.direction = "S";
      break; 

  }
  
  console.log("turnLeft was called!");
  console.log(currentDirection);
}

function turnRight(rover){
  let currentDirection = rover.direction;
  switch(currentDirection){
    case "N": 
      rover.direction = "E";
      break; 
    case "E": 
      rover.direction = "S"; 
      break;
    case "S": 
      rover.direction = "W";
      break; 
    case "W": 
      rover.direction = "N";
      break; }
  
  console.log("turnRight was called!");
  console.log(currentDirection); 
}
    
function moveForward(rover){
let currentDirection = rover.direction;
switch(currentDirection) {
    case"N": 
      rover.y--;
      break;
    case "W": 
      rover.x--;
      break;
    case "S":
      rover.y++;
      break;
    case "E":
      rover.x++;
      break;   
}
  console.log("moveForward was called")
  console.log(rover.x + "and" + rover.y);
}

moveForward(rover);