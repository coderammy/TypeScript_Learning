//Using interface With class must Imp
// readonly only use
// type use only
var Person1 = /** @class */ (function () {
    function Person1(n) {
        this.name = n;
    }
    Person1.prototype.greet = function (pharse) {
        console.log(pharse + " " + this.name);
    };
    return Person1;
}());
var Abolo;
Abolo = new Person1("AMole");
console.log(Abolo);
