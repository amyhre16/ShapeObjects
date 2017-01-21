"use strict";

/*
	constructor for Shape object
	if the user did not use `new` keyword when they created an instance of this object,
		the constructor returns a new Shape instance
*/
function Shape() {
	if (!(this instanceof Shape)) {
		return new Shape();
	}
}

/*
	add get_type() method to Shape.prototype
		this method is now inherited by any children of Shape
	this method returns the object's type
*/
Shape.prototype.get_type = function() {
	return this.__proto__.constructor;
}

/*
	constructor for Triangle object
		takes 3 arguments
	if the user did not use `new` keyword when they created an instance of this object,
		the constructor returns a new Triangle instance
*/
function Triangle(side1, side2, side3) {
	if (!(this instanceof Triangle)) {
		return new Triangle(side1, side2, side3);
	}

	// create side properties and assign the parameters to them
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
}

/*
	assign an empty Shape object to the Triangle prototype
		this makes Triangle a child of Shape
	update Triangle.prototype.constructon to Triangle
*/
Triangle.prototype = new Shape();
Triangle.prototype.constructor = Triangle;

/*
	constructor for Square object
		takes 1 argument
	if the user did not use `new` keyword when they created an instance of this object,
		the constructor returns a new Square instance
*/
function Square(sides) {
	if (!(this instanceof Square)) {
		return new Square(sides);
	}

	// create sides property and assign the parameter to it
	this.sides = sides;
}

/*
	assign an empty Shape object to the Square prototype
		this makes Square a child of Shape
	update Square.prototype.constructon to Square
*/
Square.prototype = new Shape();
Square.prototype.constructor = Square;


/*
	constructor for Pentagon object
		takes 5 arguments
	if the user did not use `new` keyword when they created an instance of this object,
		the constructor returns a new Pentagon instance
*/
function Pentagon(side1, side2, side3, side4, side5) {
	if (!(this instanceof Pentagon)) {
		return new Pentagon(side1, side2, side3, side4, side5);
	}

	// creates side properties and assigns the parameters to them
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	this.side5 = side5;
}

/*
	assign an empty Shape object to the Pentagon prototype
		this makes Pentagon a child of Shape
	update Pentagon.prototype.constructon to Pentagon
*/
Pentagon.prototype = new Shape();
Pentagon.prototype.constructor = Pentagon;

console.log("\n===============================================\n");

// create a Triangle object and pass in parameters
var tri = new Triangle(1, 2, 4);

console.log("Triangle:");

/*
	console whether or not tri is an instance of each Constructor
*/
console.log("\ntri instanceof Shape");
console.log(tri instanceof Shape);

console.log("\ntri instanceof Triangle");
console.log(tri instanceof Triangle);

console.log("\ntri instanceof Square");
console.log(tri instanceof Square);

console.log("\ntri instanceof Pentagon");
console.log(tri instanceof Pentagon);

/*
	console tri's type
*/
console.log("\ntri.get_type()");
console.log(tri.get_type());

console.log("\n===============================================\n");

// create a Square object and pass in parameter
var squ = new Square(3);

console.log("Square:");

/*
	console whether or not squ is an instance of each Constructor
*/
console.log("\nsqu instanceof Shape");
console.log(squ instanceof Shape);

console.log("\nsqu instanceof Triangle");
console.log(squ instanceof Triangle);

console.log("\nsqu instanceof Square");
console.log(squ instanceof Square);

console.log("\nsqu instanceof Pentagon");
console.log(squ instanceof Pentagon);

/*
	console squ's type
*/
console.log("\nsqu.get_type()");
console.log(squ.get_type());

console.log("\n===============================================\n");

// create a Pentagon object and pass in parameters
var pent = new Pentagon(1, 2, 3, 4, 5);

console.log("Pentagon:");

/*
	console whether or not pent is an instance of each Constructor
*/
console.log("\npent instanceof Shape");
console.log(pent instanceof Shape);

console.log("\npent instanceof Triangle");
console.log(pent instanceof Triangle);

console.log("\npent instanceof Square");
console.log(pent instanceof Square);

console.log("\npent instanceof Pentagon");
console.log(pent instanceof Pentagon);

/*
	console pent's type
*/
console.log("\npent.get_type()");
console.log(pent.get_type());