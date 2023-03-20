let hq = 42

function distanceFromHqInBlocks(street) {
    return Math.abs(street - hq)
}

function distanceFromHqInFeet(street) {
    return 264 * Math.abs(street - hq)
}

function distanceTravelledInFeet(start, destination) {
    return 264 * Math.abs(start - destination)
}

function calculatesFarePrice(start, destination) {

    if (264 * Math.abs(start - destination) < 400) {
        return 0;
    }
    else if (264 * Math.abs(start - destination) > 400 && 264 * Math.abs(start - destination) < 2000) {
        return 2.56;
    }
    else if (264 * Math.abs(start - destination) > 2000 && 264 * Math.abs(start - destination) < 2500) {
        return 25;
    }
    else if (264 * Math.abs(start - destination) > 2500) {
        return 'cannot travel that far';
    }
}