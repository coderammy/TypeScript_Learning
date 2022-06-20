
// abstract and singletons & privatecontructor

abstract class AbstractMethod{

    constructor ( readonly id:string){    }
    static createEmolyee(name: string) {
        //for static
        return { name: name };
      }

    abstract describe(this:AbstractMethod):void
}

class ItDepart extends AbstractMethod {
    private static instance:ItDepart;

   private constructor(name:string){
        super("AMAN")
    }
    static getInstance(){
        if(ItDepart.instance){
            return this.instance;
        }
        this.instance = new ItDepart("AMmynew")
        return this.instance
    }
    describe(this: AbstractMethod): void {
        console.log("it department "+this.id)
    }
}
const apolo = AbstractMethod.createEmolyee("amanDepart")

 const acconting = ItDepart.getInstance();
 const acconting2 = ItDepart.getInstance();


 console.log(">>>>>>>",acconting,acconting2)

// const newAcc = new ItDepart ("Siyaan")
acconting.describe()