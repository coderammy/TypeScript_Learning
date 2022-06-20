//Using interface With class must Imp
// readonly only use
// type use only

interface Able {
 readonly name: string;

  greet(pharse: string): void;
}

class Person1 implements Able {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  greet(pharse: string): void {
    console.log(pharse + " " + this.name);
  }
}
let Abolo: Able;

Abolo = new Person1("AMole");

console.log(Abolo);
