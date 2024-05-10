// durian-tree.js

class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }

  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }

  employeesThatMakeOver(amount) {
    // create a new employees array to hold every employee that makes over the specified amount
    let employees = [];

    if (this.salary > amount) {
      // if the current employee makes oer that amount, add them to the array
      employees.push(this);
    }

    for (const subordinate of this.subordinates) {
      // Call this method on all of the current employee's subordinates and combine their results with the current results
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount);
      employees = employees.concat(subordinatesThatMakeOver);
    }
    return employees;
  }

  totalEmployeesUnder() {
    let count = 1;
    for (const subordinate of this.subordinates) {
      count += subordinate.totalEmployeesUnder();
    }
    return count;
  }

  totalEmployees() {
    let totalEmployees = 1;

    // use depth-first traversal to calculate the total employees
    for (const subordinate of this.subordinates) {
      totalEmployees += subordinate.totalEmployees();
    }
    totalEmployees += 1;

    return totalEmployees;
  }

}

// CEO (root node)
const ada = new Employee("Ada", "CEO", 3000000.00);

// Managers (middle)
const craig    = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);

// Employees (Leaf nodes)
const simone    = new Employee("Simone", "", 500000);
const ali       = new Employee("Ali", "", 500000);
const florida   = new Employee("Florida", "", 500000);
const david     = new Employee("David", "", 500000);
const brian     = new Employee("Brian", "", 500000);
const karla     = new Employee("Karla", "", 500000);

// Ada's subordinates
ada.addSubordinate(craig);
ada.addSubordinate(phil);
ada.addSubordinate(angela);
ada.addSubordinate(arvinder);
ada.totalEmployees; // Returns the total number of employees in the entire company.
craig.totalEmployees; // Returns the total number of employees working in software development.

// Craig's subordinates
craig.addSubordinate(simone);
craig.addSubordinate(ali);

// Phil's subordinates
phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);

// Angela's subordinate
angela.addSubordinate(karla);

// Validation
console.log("Craig's boss:", craig.boss); // Ada
console.log("Craig's number of subordinates:", craig.numberOfSubordinates); // 0
console.log("Number of people between Craig and the CEO:", craig.numberOfPeopleToCEO); // 1
console.log("Do Craig and Arvinder share the same boss?", craig.hasSameBoss(arvinder)); // true
console.log("Total number of employees in the entire company:", ada.totalEmployeesUnder());
console.log("Total number of employees working in software development:", craig.totalEmployees());