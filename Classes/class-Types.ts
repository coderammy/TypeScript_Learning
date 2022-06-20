//  class and constructor
class people {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  Describe(this: people) {
    console.log("Dpeartment" + this.name);
  }
}

const public1 = new people("Goswami");

public1.Describe();
const acopy = { name: "a", Describe: public1.Describe };

acopy.Describe();

console.log(public1);

// Private And Public
class Mum {
  public name: string;
  private contacts: string[] = [];

  constructor(n: string) {
    this.name = n;
    // this.contacts=n1["public"]
  }

  addPublic(contacts: string) {
    this.contacts.push(contacts);
  }

  printinfo() {
    console.log(this.contacts.length);
    console.log(this.contacts);
  }
}

const accounts = new Mum("Depart");

accounts.addPublic("max");
accounts.addPublic("ranu");

// accounts.contacts[2]="aman" //error for private
accounts.printinfo();

// shorthand Initializtion shortcut
// readonly
class Mern {
  constructor(private readonly id: number, public name: string) {}
  AddPublic(this: Mern) {
    console.log(`Department (${this.id}):${this.name}`);
  }
}

const Mernstack = new Mern(1, "Depaort");

Mernstack.AddPublic();


