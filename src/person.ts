class Person {
	fullname: string;
	
	constructor(public firstname, public lastname) {
		this.fullname = firstname + " " + lastname;
	}
}

export = Person;