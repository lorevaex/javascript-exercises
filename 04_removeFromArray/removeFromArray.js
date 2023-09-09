const removeFromArray = function(arr, ...args) {

    for (let arg of args) {

        let arg_index = arr.indexOf(arg);

        while (arg_index != -1) {
            arr.splice(arg_index, 1);
    
            arg_index = arr.indexOf(arg);
        }

    }


    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
