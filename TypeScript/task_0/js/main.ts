/* interface named Student that accepts the following elements */
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
  }

/* create student1 */
const student1: Student = {
  firstName: 'Lou',
  lastName: 'Bega',
  age: 40,
  location: 'New York',
};

/* create student2 */
const student2: Student = {
  firstName: 'Freddie',
  lastName: 'Mercury',
  age: 45,
  location: 'Paradise',
};

/* store them into an array */
const studentsList: Student[] = [student1, student2];

/* using vanilla js, create table */
const table = document.createElement('table');

/* create header row */
const headerRow = table.insertRow();
headerRow.insertCell().textContent = 'First Name';
headerRow.insertCell().textContent = 'Last Name';
headerRow.insertCell().textContent = 'Age';
headerRow.insertCell().textContent = 'Location';

/* create a row for each student */
studentsList.forEach((student) => {
  const row = table.insertRow();
  row.insertCell().textContent = student.firstName;
  row.insertCell().textContent = student.lastName;
  row.insertCell().textContent = student.age.toString();
  row.insertCell().textContent = student.location;
});

/* append the table to the body */
document.body.appendChild(table);
