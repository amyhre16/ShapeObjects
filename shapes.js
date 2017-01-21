"use strict";

function Shape() {
	if (!(this instanceof Shape)) {
		return new Shape();
	}
}

Shape.prototype.get_type = function() {
	return this.__proto__.constructor;
}

function Triangle(side1, side2, side3) {
	if (!(this instanceof Triangle)) {
		return new Triangle(side1, side2, side3);
	}

	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
}

Triangle.prototype = new Shape();
Triangle.prototype.constructor = Triangle;

function Square(sides) {
	if (!(this instanceof Square)) {
		return new Square(sides);
	}

	this.sides = sides;
}

Square.prototype = new Shape();
Square.prototype.constructor = Square;

function Pentagon(side1, side2, side3, side4, side5) {
	if (!(this instanceof Pentagon)) {
		return new Pentagon(side1, side2, side3, side4, side5);
	}

	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	this.side5 = side5;
}

Pentagon.prototype = new Shape();
Pentagon.prototype.constructor = Pentagon;

console.log("\n===============================================\n");

var tri = new Triangle(1, 2, 4);
console.log("Triangle:");
console.log(tri instanceof Shape);
console.log(tri instanceof Triangle);
console.log(tri instanceof Square);
console.log(tri instanceof Pentagon);
console.log(tri.get_type());

console.log("\n===============================================\n");

console.log("Square:");
var squ = new Square(3);
console.log(squ instanceof Shape);
console.log(squ instanceof Triangle);
console.log(squ instanceof Square);
console.log(squ instanceof Pentagon);
console.log(squ.get_type());

console.log("\n===============================================\n");
console.log("Pentagon:");
var pent = new Pentagon(1, 2, 3, 4, 5);
console.log(pent instanceof Shape);
console.log(pent instanceof Triangle);
console.log(pent instanceof Square);
console.log(pent instanceof Pentagon);
console.log(pent.get_type());