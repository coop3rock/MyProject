"use strict";

// 3. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи що ці властивості виводять. 


let me = {
	name: 'Dmytro',
	residency: 'Kyiv',
	gender: 'male',
	born: 1985,
	age: 37,
	occupation: {
		1: 'sales manager',
		2: 'economist',
		3: 'bank manager',
		4: 'manager at a car service station',
		5: 'barthender',
		6: 'self employed',
		7: 'coffee roast master',
	},
	hobby: 'driving',
	introduce() {
		console.log(`My name is ${this.name} and I was born in ${this.born} year. I live in ${this.residency} all my life.`);
	},
	profession() {
		console.log(`I have had many jobs in my life. Such as:`);
		Object.keys(this.occupation).forEach(key => {
		console.log(`${this.occupation[key]}`);
	});
	},
	describeMyHobby(){
		Object.values(this).forEach(value => {
		if(value===this.hobby){
	console.log('My hobby is ' + value +'.');}
	});
		
	}
	}

me.introduce();
me.profession();
me.describeMyHobby();

