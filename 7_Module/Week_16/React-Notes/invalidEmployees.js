/*
  Employee Information:

  Goal: Using the small sample of data of employees, create a function
  that returns a new array of employees with missing information.


  This file seems a bit complex. So break it down:

  Before we can start looping through each employee, we must find a
  way to validate each employee.

  By using a single employee as a point of reference, let us create
  a helper function to validate that single employee.

  If the employee has missing info, then we will return true, otherwise
  return false. we will use this with our loop to creat a new array of
  employees that have missing info.
*/

const sampleEmployees = [{
  "id": 1,
  "employee_name": "Milena",
  "employee_email": "milena@company.org",
  "employee_number": null,
  "employee_id": "3056804574"
}, {
  "id": 2,
  "employee_name": "Anthia",
  "employee_email": "anthia@company.org",
  "employee_number": "745-430-6346",
  "employee_id": "8910054654"
}, {
  "id": 3,
  "employee_name": "Elissa",
  "employee_email": "elissa@company.org",
  "employee_number": "293-415-1928",
  "employee_id": "3753565938"
}, {
  "id": 4,
  "employee_name": "Hortensia",
  "employee_email": "hortensia@company.org",
  "employee_number": "141-807-0169",
  "employee_id": null
}, {
  "id": 5,
  "employee_name": "Marcelline",
  "employee_email": "marcelline@company.org",
  "employee_number": null,
  "employee_id": "0780303520"
}, {
  "id": 6,
  "employee_name": "Colby",
  "employee_email": null,
  "employee_number": "495-893-8853",
  "employee_id": "3011385777"
}];

// helper function to validate employees"
const employeeWithMissingInformation = function(employee) {
  // loop through the employee properties
  for (let key in employee) {
    // check if the property is null or undefined
    if (employee[key] === null || employee[key] === undefined) {
      return true;
    }
  }
  return false;
};

const invalidEmployees = (employees) => {
  // filter out employees with missing info
  const invalidEmployeesList = employees.filter(employee => employeeWithMissingInformation(employee));
  // extract only the names of the invalid employees
  return invalidEmployeesList.map(employee => employee.employee_name);
};

console.log(invalidEmployees(sampleEmployees));