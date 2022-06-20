//Inheritance

class Department {
  //   static realdate:2020
  protected enpolyees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}
  static createEmolyee(name: string) {
    //for static
    return { name: name };
  }

  addEmployee(enpolyees: string) {
    this.enpolyees.push(enpolyees);
  }

  describe(){//Abstract method 
    // console.log ("department:::::" +this.id)
  }
}

//  extends Inheritance
class ItDepartment extends Department {
  //   admins:string[]
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountDepart extends Department {
  // private lastReport: string;

  // get mostRecent (){
  //     if(this.lastReport) {
  //         return this.lastReport
  //     } 
  //     throw new Error ('No result found')
  // }

  // set mostRecent(value:string ) {
  //     this.addReport(value )
  // }

  constructor(id: string, private report: string[]) {
    super(id, "IT");
    // this.lastReport = report[0]
  }

  //Overriding Properties & the protected modifier

  addEmployee(name: string) {
    if (name === "max") {
      return;
    }
    this.enpolyees.push(name);
  }

  addReport(text: string) {
    this.report.push(text);
  }

  getReport() {
    console.log(this.report);
  }
}

const employe1 = Department.createEmolyee("maatt");
console.log(employe1);
// console.log( Department.realdate)

const Accounts = new ItDepartment("d1", ["max"]);
Accounts.addEmployee("max");

console.log(Accounts);

Accounts.addEmployee("max");
Accounts.addEmployee("manu");

const newAccounting = new AccountDepart("d3", ["ammy"]);

// console.log(newAccounting.mostRecent)
newAccounting.addEmployee("ammy");
newAccounting.getReport();

newAccounting.describe()

console.log(newAccounting);
