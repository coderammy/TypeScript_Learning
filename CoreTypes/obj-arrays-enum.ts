//  Object Core Type
const Person: {
  name: string;
  Age: number;
} = {
  name: "Aman",
  Age: 22,
};
console.log(Person.name);

//basic Type Array

const People = {
  NAme: "Nitin",
  AGE: 22,
  contacts: ["aman1", "abhi", "raju"],
};
let Activity: string[];
Activity = ["dance", "game"];

console.log(People.NAme);

for (const hobby of People.contacts) {
  console.log(hobby.toUpperCase());
}

// Tuple

const Public: {
  NAme: string;
  AGE: number;
  contacts: string[];
  role: [string, string, string, number];
} = {
  NAme: "Nitin",
  AGE: 22,
  contacts: ["aman1", "abhi", "raju"],
  role: ["police", "clerk", "bikers", 45],
};

// Public.role.push("admin");
// Public.role[2];

let last: string[];
Activity = ["dance", "game"];

console.log(People.NAme);

for (const hobby of People.contacts) {
  console.log(hobby.toUpperCase());
}

// enum
// often you'll see enum with all-uppercase values but thats not a "must-do" .you can go with ANY value names.
// const ADMIN = 1
// const PUBLIC = "public" 
enum Role{
  ADMIN=5,
  READ_ONLY,
  AUTHOR
}

const goverment = {
  NAme: "Nitin",
  AGE: 22,
  contacts: ["aman1", "abhi", "raju"],
  role: Role.ADMIN
};

if (goverment.role === Role.ADMIN){
  console.log("is admin")
}

// Any 
// dont use Any
let basson: any []
basson =["aaa",4545]