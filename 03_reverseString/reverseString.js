const reverseString = function(s) {
    let s_reversed = '';
    for (let i = s.length; i > 0; i--) {
        s_reversed += s[i-1];
    }
    return s_reversed;
};

// Do not edit below this line
module.exports = reverseString;
