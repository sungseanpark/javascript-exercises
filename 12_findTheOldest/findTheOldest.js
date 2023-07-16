const findTheOldest = function(people) {
    const oldest = people.sort( function(a,b) {
        let lastPerson;
        if(!a['yearOfDeath']){
            lastPerson = 2023 - a.yearOfBirth;
        }
        else{
            lastPerson = a.yearOfDeath - a.yearOfBirth;
        }
        let nextPerson;
        if(!b['yearOfDeath']){
            nextPerson = 2023 - b.yearOfBirth;
        }
        else{
            nextPerson = b.yearOfDeath - b.yearOfBirth;
        }
      return lastPerson > nextPerson ? -1 : 1;
    });


    return oldest[0];

};

// Do not edit below this line
module.exports = findTheOldest;
