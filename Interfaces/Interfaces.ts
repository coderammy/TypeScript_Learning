// interface
interface Person{
    name:string;

    greet(pharse:string):void
}

let user1 :Person

user1 ={
    name :"samaty",

    greet (pharse:"hi i am "){
        console.log(pharse +this.name)
    }
}

user1.greet("hi i am ")

// using Interfaces & class
