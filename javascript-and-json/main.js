const library = [
  {
    isbn: '0-15-131510-8',
    title: 'Flowers for Algernon',
    author: 'Daniel Keyes',
  },
  {
    isbn: '978-0-8041-3902-1',
    title: 'The Martian',
    author: 'Andy Weir',
  },
  {
    isbn: '978-1524763282',
    title: 'Ready Player One',
    author: 'Ernest Cline',
  },
];
console.log('Array of Books:', library);
console.log('Type of Books:', typeof library);

const libraryString = JSON.stringify(library);
console.log('JSON String of books:', libraryString);
console.log('Type of JSON String of Books:', typeof libraryString);

const student = '{"student id": "339943", "name": "Todd"}';
console.log('String of student:', student);
console.log('Type of Student:', typeof student);

const studentObject = JSON.parse(student);
console.log('Object of Student:', studentObject);
console.log('Type of Student Object:', typeof studentObject);
