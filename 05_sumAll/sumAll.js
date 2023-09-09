const sumAll = function(int1, int2) {

    //error safeguard

    //negatives
    if (int1 < 0 || int2 < 0) {
        return 'ERROR';
    } 
    //non-numer parameters 
    else if(typeof(int1) != 'number' || typeof(int2) != 'number') {
        return 'ERROR';
    }




    //code logic
    let i_start, i_end, i, sum;

    if (int1 < int2) {
        i_start = int1;
        i_end = int2;
    } else {
        i_start = int2;
        i_end = int1;
    }

    i = i_start;
    sum = 0;

    while (i != (i_end + 1)) {
        sum += i;
        
        i += 1;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
