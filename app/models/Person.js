class Person {
	constructor(first_name, last_name, age) {
		this.first_name = first_name;
		this.last_name = last_name;
		this.age = age;
	}

	getFullname() {
		return this.first_name + ' ' + this.last_name;
	}

	getAge() {
		return this.age;
	}
}

module.exports = Person;
