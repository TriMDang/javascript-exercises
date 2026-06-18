const findTheOldest = function(people) {
    let oldFella = (people.reduce((oldest, person) => {
        if (person.yearOfDeath == undefined){
            person.yearOfDeath = (new Date()).getFullYear();
        }
        let age = person.yearOfDeath - person.yearOfBirth;
        if (age > (oldest.yearOfDeath - oldest.yearOfBirth)){
            oldest = person;
        }
        return oldest;
    }, people[0]));
    return (oldFella);
};

// Do not edit below this line
module.exports = findTheOldest;
