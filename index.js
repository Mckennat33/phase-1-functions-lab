

const blockHq = 42; 
const oneBlock = 264; 

function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - blockHq);
  }
  
function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue); {
        let distanceInFeet = Math.abs(someValue - blockHq) * oneBlock;
        return distanceInFeet;     
    }
  }

function distanceTravelledInFeet(value1, value2) {
    let distanceInFeet = Math.abs(value1 - value2) * oneBlock;
    return distanceInFeet; 
}


 function calculatesFarePrice(value1, value2) {
    
    let distanceInFeet = Math.abs(value1 - value2) * oneBlock;
    if (distanceInFeet <= 400) {
        return 0; 
    }   else if (distanceInFeet > 400 && distanceInFeet < 2000) {
        return (distanceInFeet - 400) * (20/1000); 
    }  else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25; 
    } else if (distanceInFeet > 2500) {
        return 'cannot travel that far'; 
    }
}

