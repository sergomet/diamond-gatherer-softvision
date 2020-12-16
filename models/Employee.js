const Person = require('./Person');

class Employee extends Person {
	constructor(first_name, last_name, age, role, payday, salary) {
		super(first_name, last_name, age);
		this.role_name = role || null;
		this.payday = payday || null;
		this.salary = salary || null;
	}

	getRoleName() {
		return this.role_name;
	}

	getPayday() {
		return this.payday;
	}

	getSalary() {
		return this.salary;
	}
}

module.exports = Employee;
