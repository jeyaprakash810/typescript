class Department{
    //readonly id:string;
    //name:string;

    static fiscalYear:number = 2024;
    private employee:string[] = [];

    constructor(private readonly id:string,public name:string){
        //this.id = id;
        //this.name = name;
    }

    static createEmployee(name:string){
        console.log(name);
    }

    describe(this:Department){
        console.log(`Department id ${this.id} name : ${this.name}`)
    }

    addEmployee(employ:string){
        this.employee.push(employ)
    }

    printEmployee(){
        console.log(this.employee)
    }

}


class ITDepartment extends Department {
    admins:string[];

    constructor(id:string,admin:string[]){
        super(id,'IT')
        this.admins = admin;
    }

    addAdmin(admin:string){
        this.admins.push(admin)
    }

    printAdmin(){
        console.log('Admins : ',this.admins)
    }

}


class TransportDepartment extends Department {
    reports:string[];
    private last_reports:string;

    get mostRecentReport() {
        if(this.last_reports)
        return this.last_reports;
    }
    constructor(id:string,report:string[]){
        super(id,'Transport')
        this.reports = report;
        this.last_reports = report[0];
    }

    set mostRecentReport(value){
        if(!value){
            throw new Error('Please enter valid input')
        }
        this.addReport(value)
    }

    printReport(){
        console.log('Reports : ',this.reports)
    }

    addReport(text:string){
        this.reports.push(text);
        this.last_reports = text;
    }

}

Department.createEmployee('our new employeed');
console.log('fiscal year : ',Department.fiscalYear)
const IT = new ITDepartment("D1",[])
IT.describe();

IT.addAdmin('jp')
IT.addEmployee('jp');
IT.addEmployee('subha')

IT.printEmployee();
IT.printAdmin();


const transport = new TransportDepartment("D2",[])
transport.mostRecentReport="This is year end report"
transport.addReport('Something went wront')

transport.printReport();
 
console.log('most recent report ',transport.mostRecentReport)

// const accCopy = {name:'dummy',describe:accounting.describe}

// accCopy.describe();
 console.log(IT)








