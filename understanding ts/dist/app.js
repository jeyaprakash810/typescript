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
    describe() {
        console.log(`Department id ${this.id} name : ${this.name}`);
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
const transport = new TransportDepartment("D2", []);
transport.mostRecentReport = "This is year end report";
transport.addReport('Something went wront');
transport.printReport();
console.log('most recent report ', transport.mostRecentReport);
console.log(IT);
//# sourceMappingURL=app.js.map