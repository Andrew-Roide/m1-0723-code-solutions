const student = {
  firstName: 'Andrew',
  lastName: 'Roide',
  age: 30,
};

const fullName = `${student.firstName} ${student.lastName}`;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Customer Service';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log(student);

const vehicle = {
  make: 'McLaren',
  model: 'MP4-12C',
  year: '2014',
};

vehicle['color'] = 'Orange';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

const pet = {
  name: 'lola',
  type: 'dog',
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
