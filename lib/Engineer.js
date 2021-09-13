const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.GetHub = GetHub
    }

    getGetHub() {
        return this.GetHub;
    }

    getrole() {
        return "Engineer";
    }
}

module.exports = Engineer;