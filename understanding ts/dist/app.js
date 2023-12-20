"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employee = [];
    }
    static createEmployee(name) {
        console.log(name);
    }
    addEmployee(employ) {
        this.employee.push(employ);
    }
    printEmployee() {
        console.log(this.employee);
    }
}
Department.fiscalYear = 2024;
class ITDepartment extends Department {
    constructor(id, admin) {
        super(id, 'IT');
        this.admins = admin;
    }
    addAdmin(admin) {
        this.admins.push(admin);
    }
    printAdmin() {
        console.log('Admins : ', this.admins);
    }
    describe() {
        console.log(`Thi is IT department describtion `, this.id);
    }
}
class TransportDepartment extends Department {
    get mostRecentReport() {
        if (this.last_reports)
            return this.last_reports;
    }
    constructor(id, report) {
        super(id, 'Transport');
        this.reports = report;
        this.last_reports = report[0];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new TransportDepartment('D2', []);
        return this.instance;
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please enter valid input');
        }
        this.addReport(value);
    }
    printReport() {
        console.log('Reports : ', this.reports);
    }
    addReport(text) {
        this.reports.push(text);
        this.last_reports = text;
    }
    describe() {
        console.log('This is TransportDepartment of ', this.id);
    }
}
Department.createEmployee('our new employeed');
console.log('fiscal year : ', Department.fiscalYear);
const IT = new ITDepartment("D1", []);
IT.describe();
IT.addAdmin('jp');
IT.addEmployee('jp');
IT.addEmployee('subha');
IT.printEmployee();
IT.printAdmin();
const transport = TransportDepartment.getInstance();
transport.mostRecentReport = "This is year end report";
transport.addReport('Something went wront');
transport.printReport();
transport.describe();
console.log('most recent report ', transport.mostRecentReport);
console.log(IT);
const transport2 = TransportDepartment.getInstance();
transport.printReport();
transport.describe();
console.log("Transport obj is same :  ", transport === transport2);
//# sourceMappingURL=app.js.map