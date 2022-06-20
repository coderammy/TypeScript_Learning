//  Object Core Type
var Person = {
    name: "Aman",
    Age: 22
};
console.log(Person.name);
//basic Type Array
var People = {
    NAme: "Nitin",
    AGE: 22,
    contacts: ["aman1", "abhi", "raju"]
};
var Activity;
Activity = ["dance", "game"];
console.log(People.NAme);
for (var _i = 0, _a = People.contacts; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
// Tuple
var Public = {
    NAme: "Nitin",
    AGE: 22,
    contacts: ["aman1", "abhi", "raju"],
    role: ["police", "clerk", "bikers", 45]
};
// Public.role.push("admin");
// Public.role[2];
var last;
Activity = ["dance", "game"];
console.log(People.NAme);
for (var _b = 0, _c = People.contacts; _b < _c.length; _b++) {
    var hobby = _c[_b];
    console.log(hobby.toUpperCase());
}
// enum
// often you'll see enum with all-uppercase values but thats not a "must-do" .you can go with ANY value names.
// const ADMIN = 1
// const PUBLIC = "public" 
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
var goverment = {
    NAme: "Nitin",
    AGE: 22,
    contacts: ["aman1", "abhi", "raju"],
    role: Role.ADMIN
};
if (goverment.role === Role.ADMIN) {
    console.log("is admin");
}
