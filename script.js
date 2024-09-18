let employees = {
    fullTime: [],
    partTime: []
};

function toggleSalaryFields() {
    const employeeType = document.getElementById('employeeType').value;
    if (employeeType === 'fullTime') {
        document.getElementById('fullTimeFields').style.display = 'block';
        document.getElementById('partTimeFields').style.display = 'none';
    } else {
        document.getElementById('fullTimeFields').style.display = 'none';
        document.getElementById('partTimeFields').style.display = 'block';
    }
}

function addEmployee() {
    const name = document.getElementById('name').value.trim();
    const id = parseInt(document.getElementById('id').value, 10);
    const employeeType = document.getElementById('employeeType').value;
    
    if (employeeType === 'fullTime') {
        const monthlySalary = parseFloat(document.getElementById('monthlySalary').value);
        if (isNaN(monthlySalary) || monthlySalary <= 0) {
            alert('Please enter a valid monthly salary.');
            return;
        }
        employees.fullTime.push({
            name: name,
            id: id,
            salary: monthlySalary
        });
    } else {
        const hoursWorked = parseInt(document.getElementById('hoursWorked').value, 10);
        const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
        if (isNaN(hoursWorked) || hoursWorked <= 0 || isNaN(hourlyRate) || hourlyRate <= 0) {
            alert('Please enter valid hours worked and hourly rate.');
            return;
        }
        employees.partTime.push({
            name: name,
            id: id,
            salary: hoursWorked * hourlyRate
        });
    }

    updateEmployeeLists();
    document.getElementById('addEmployeeForm').reset();
    toggleSalaryFields(); // Reset visibility of fields
}

function removeEmployee() {
    const id = parseInt(document.getElementById('removeId').value, 10);
    if (isNaN(id)) {
        alert('Please enter a valid ID.');
        return;
    }

    employees.fullTime = employees.fullTime.filter(emp => emp.id !== id);
    employees.partTime = employees.partTime.filter(emp => emp.id !== id);

    updateEmployeeLists();
    document.getElementById('removeEmployeeForm').reset();
}

function updateEmployeeLists() {
    const fullTimeList = document.getElementById('fullTimeList');
    const partTimeList = document.getElementById('partTimeList');
    
    // Clear existing lists
    fullTimeList.innerHTML = '';
    partTimeList.innerHTML = '';

    // Update Full-Time Employees
    employees.fullTime.forEach(employee => {
        const li = document.createElement('li');
        li.textContent = `Name: ${employee.name}, ID: ${employee.id}, Salary: ${employee.salary.toFixed(2)}`;
        fullTimeList.appendChild(li);
    });

    // Update Part-Time Employees
    employees.partTime.forEach(employee => {
        const li = document.createElement('li');
        li.textContent = `Name: ${employee.name}, ID: ${employee.id}, Salary: ${employee.salary.toFixed(2)}`;
        partTimeList.appendChild(li);
    });
}
