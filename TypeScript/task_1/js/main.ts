/* interface named Student that accepts the following elements */
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // optional
  location: string;
  [propName: string]: any; // possibility to add any attribute withour specifying name of the attribute
  }

/* create teacher3 */
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
}

console.log(director1);

/* function printTeacher */
function printTeacher(firstName: string, lastName: string) {
  const firstNameFirstLetter = firstName[0];
  return (`${firstNameFirstLetter}. ${lastName}`);
};

const resultFunction = printTeacher("John", "Doe");
console.log(resultFunction);

/* write a class */
export interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
  displayName(): string;
  workOnHomework(): string;
}

class StudentClass {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  };

  workOnHomework() {
    return ("Currently working");
  }

  displayName() {
    return(this.firstName);
  }
}
