// Code your solution in this file!
const distanceFromHqInBlocks = (blocks) => {
    return Math.abs(blocks - 42)
}
// function distanceFromHqInBlocks(location) {
//     // returns the number of blocks given a value
//     if (location<42){
//         return(42-location);
//       }
//       else {
//       return(location-42);
//     }
// }
function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, destination) {
    // if (destination>start){
    //     return((destination-start)*264);
    // }
    // else
    //     return((start-destination)*264);
    const distance = Math.abs(start-destination);
    return distance *264
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance = distanceTravelledInFeet(start,destination)
    if(distance <= 400){
        return 0
    }
    else if(distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02
    }
    else if (distance > 2000 && distance <= 2500){
        return 25
    }
    else if (distance >2500){
        return "cannot travel that far"
    }
}