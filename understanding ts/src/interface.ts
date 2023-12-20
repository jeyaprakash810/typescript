interface IPerson {
    name:string;
    age:number;
    readonly id:number; 
    outputName?:string; //optional 
    work(desgination:string):void; 
}

interface IDisabledPerson extends IPerson,IHuman{
    disableType:string;
    isHome(bool:boolean):boolean;    
}

interface IHuman{
    isHuman:boolean;
}

class StrongPerson implements IPerson {
    name:string;
    readonly id:number;
    age:number;

    constructor(id:number,name:string,age:number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    work(desc:string): void {
        console.log(`${this.name} is working as ${desc} @ age of ${this.age}`)
    }
}

class Human implements IDisabledPerson {
    name:string;
    readonly id:number;
    age:number;
    isHuman: boolean;
    disableType: string;

    constructor(id:number,name:string,age:number,disableType:string){
        this.id = id;
        this.name = name;
        this.age = age;
        this.isHuman = true;
        this.disableType=disableType;
    }

    work(desc:string): void {
        console.log(`${this.name} (disabled person) is working as ${desc} @ age of ${this.age}`)
    }

    isHome(bool:boolean): boolean {
        console.log(`This human stayed @ home ${bool}`)
        return bool;
    }
}

let person1:IPerson;

person1 = new StrongPerson(3,'prakash',41)

person1.work('software');

let person2:IDisabledPerson;

person2 = new Human(100,'raja',23,"hand")

person2.work('mechanic');

person2.isHome(false);


