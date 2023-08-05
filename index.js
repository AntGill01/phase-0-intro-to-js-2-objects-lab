// Write your solution in this file!
let employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value){
    let e = {...employee};
    e[key] = value;
    return e;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
};
function deleteFromEmployeeByKey(employee, key){
    let e = {...employee};
    delete e[key];
    return e;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
