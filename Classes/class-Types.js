//  class and constructor
var people = /** @class */ (function () {
    function people(n) {
        this.name = n;
    }
    people.prototype.Describe = function () {
        console.log("Dpeartment" + this.name);
    };
    return people;
}());
var public1 = new people("Goswami");
public1.Describe();
var acopy = { name: "a", Describe: public1.Describe };
acopy.Describe();
console.log(public1);
// Private And Public
var Mum = /** @class */ (function () {
    function Mum(n) {
        this.contacts = [];
        this.name = n;
        // this.contacts=n1["public"]
    }
    Mum.prototype.addPublic = function (contacts) {
        this.contacts.push(contacts);
    };
    Mum.prototype.printinfo = function () {
        console.log(this.contacts.length);
        console.log(this.contacts);
    };
    return Mum;
}());
var accounts = new Mum("Depart");
accounts.addPublic("max");
accounts.addPublic("ranu");
// accounts.contacts[2]="aman" //error for private
accounts.printinfo();
// shorthand Initializtion shortcut
// readonly
var Mern = /** @class */ (function () {
    function Mern(id, name) {
        this.id = id;
        this.name = name;
    }
    Mern.prototype.AddPublic = function () {
        console.log("Department (".concat(this.id, "):").concat(this.name));
    };
    return Mern;
}());
var Mernstack = new Mern(1, "Depaort");
Mernstack.AddPublic();
