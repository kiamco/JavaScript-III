/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global object binding - when you use 'this' your referencing the main Window object
 * 2. implicit binding - when using the 'this' keyword it usually preceeded witha dot. This is usually used calling object properties 
 * 3. New binding - These are usually used when instatiating obbject properties when creating a constructor.
 * 4. explicit binding - s far ive seen them used when creating another class that inherits properties from a parent class
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const obj = {
    name: "kim",
    age: 24,
    sayHi: function() {
        console.log(`hello, my name is ${this.name} and my age is ${this.age}`);
    }
}

obj.sayHi();

// Principle 3

// code example for New Binding

function Program(attr) {
    this.creator = attr.creator;
    this.purpose = attr.purpose;
    this.name = attr.name;
    this.language = attr.language;
}

const subjack = new Program({
    creator: "kim",
    purpose: "subdomain takeover",
    name: "subjack",
    language: "go"
});

console.log(subjack);

// Principle 4

// code example for Explicit Binding

function SpecialProgram(specialAttr) {
    Program.call(this, specialAttr);
    this.database = specialAttr.database;
}

const otherProg = new SpecialProgram({
    creator: "kim",
    purpose: "recipes",
    name: "scratch food",
    language: "javascript"
});

console.log(otherProg);