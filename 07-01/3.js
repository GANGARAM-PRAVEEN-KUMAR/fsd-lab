
function updateEmployeeDetails(employee, newRole) {
    return {
        ...employee, 
        role: newRole
    };
}

const employee={
    name:'praveen',
    role:'developer',
    age:19,
    location:'in'
}
const updatedEmployee = updateEmployeeDetails(employee,'software developer');

console.log(updatedEmployee);
