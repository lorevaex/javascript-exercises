const findTheOldest = function (array) {
    return array.reduce((oldest, currentPerson) => {
        
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth,currentPerson.yearOfDeath);
        
        return oldestAge < currentAge ? currentPerson : oldest;
    });
    };



const getAge = function (yearOfBirth, yearOfDeath) {
    if (!yearOfDeath) {
        yearOfDeath = new Date().getFullYear();
    }
    return yearOfDeath - yearOfBirth;
    };



// Do not edit below this line
module.exports = findTheOldest;
