const sumAll = function(min, max) {

    //error safeguard

    //negatives
    if (min < 0 || max < 0) {
        return 'ERROR';
    } 
    //non-number parameters 
    else if(!Number.isInteger(min) || !Number.isInteger(max)) {
        return 'ERROR';
    }




    //code logic
    let sum = 0;

    if (max < min) {
        const temp = min;
        min = max;
        max = temp;
    } 

    for (let i = min; i <= max; i++) {
        sum += i;
    }


    return sum;
};

// Do not edit below this line
module.exports = sumAll;
