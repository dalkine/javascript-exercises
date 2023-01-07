const findTheOldest = function(people) {
    let max=0;
    let index;
    for(let i=0;i<people.length;i++){
        let age =getAge(people[i].yearOfBirth,people[i].yearOfDeath)
        if(age>max){
            max=age;
            index=i;
        }

    }
    return people[index]

};
const getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
