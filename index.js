const employee = {name: 'Fred', streetAddress: '1 Smith St'};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {[key]:value})
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign(employee, {[key]:value})
}
function deleteFromEmployeeByKey(employee, key){
    let newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    let newEmployee = employee;
    delete newEmployee[key];
    return newEmployee;
}