const repeatString = function(s, num) {

    if (num < 0) {
        return 'ERROR';
    }

    let s_rev = '';
    for (let i = 0; i < num; i++) {
        s_rev += s;
    }
    return s_rev;
};

// Do not edit below this line
module.exports = repeatString;
