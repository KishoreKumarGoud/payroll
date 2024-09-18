let employees = [];

function addEmployee() {
    const name = document.getElementById('name').value.trim();
    const id = parseInt(document.getElementById('id').value, 10);
    const monthlySalary = parseFloat(document.getElementById('monthlySalary').value);
    const hoursWorked = parseInt(document.getElementById('hoursWorked').value, 10);
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);

    if (isNaN(id) || (isNaN(monthlySalary) && (isNaN(hoursWorked) || isNaN(hourlyRate)))) {
        alert('Please enter valid employee data.');
        return;
    }

    if (monthlySalary > 0) {
        employees.push({
            name: name,
            id: id,
            salary: monthlySalary
        });
    } else if (hoursWorked > 0 && hourlyRate > 0) {
        employees.push({
            name: name,
            id: id,
            salary: hoursWorked * hourlyRate
        });
    }

    updateEmployeeList();
    document.getElementById('addEmployeeForm').reset();
}

function removeEmployee() {
    const id = parseInt(document.getElementById('removeId').value, 10);
    if (isNaN(id)) {
        alert('Please enter a valid ID.');
        return;
    }

    employees = employees.filter(emp => emp.id !== id);

    updateEmployeeList();
    document.getElementById('removeEmployeeForm').reset();
}

function updateEmployeeList() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    employees.forEach(employee => {
        const li = document.createElement('li');
        li.textContent = `Name: ${employee.name}, ID: ${employee.id}, Salary: ${employee.salary.toFixed(2)}`;
        employeeList.appendChild(li);
    });
}
