//Destructuring

const student = {
    name: "John Doe",
    age: 20,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
}

// old way of accessing object properties
const oldName = student.name;

// new way of accessing object properties using destructuring
const {age,name,address} = student;

// console.log(name);

const student2 = {
    name: "Jane Doe",
    age: 22,
    address: {
        street: "456 Elm St",
        city: "Othertown",
        country: "USA"
    }
}

// destructuring with renaming
const {name: studentName, age: studentAge, address: studentAddress} = student;

console.log(studentName, studentAddress);
