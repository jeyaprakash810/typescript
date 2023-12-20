abstract class Department{
    //readonly id:string;
    //name:string;

    static fiscalYear:number = 2024;
    private employee:string[] = [];

    constructor(protected readonly id:string,public name:string){
        //this.id = id;
        //this.name = name;
    }

    static createEmployee(name:string){
        console.log(name);
    }

    abstract describe(this:Department) : void;

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

    describe(): void {
        console.log(`Thi is IT department describtion `,this.id)
    }

}


class TransportDepartment extends Department {
    reports:string[];
    private last_reports:string;
    private static instance:TransportDepartment;


    get mostRecentReport() {
        if(this.last_reports)
        return this.last_reports;
    }
    private constructor(id:string,report:string[]){
        super(id,'Transport')
        this.reports = report;
        this.last_reports = report[0];
    }

    static getInstance(){
        if(this.instance){
            return this.instance
        }
        this.instance = new TransportDepartment('D2',[]);
        return this.instance;
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

    describe(): void {
        console.log('This is TransportDepartment of ',this.id)
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


const transport = TransportDepartment.getInstance();
transport.mostRecentReport="This is year end report"
transport.addReport('Something went wront')

transport.printReport();
transport.describe();
 
console.log('most recent report ',transport.mostRecentReport)

// const accCopy = {name:'dummy',describe:accounting.describe}

// accCopy.describe();
 console.log(IT)


 const transport2 = TransportDepartment.getInstance();
 transport.printReport();
transport.describe();

console.log("Transport obj is same :  ",transport === transport2)








