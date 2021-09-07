const render = require("./src/page-template.js");
const fs = require("fs");
const path = require("path");
const team = [
    {
        name: "Blake",
        id: 1,
        email: "begordon22@gmail.com",
        role: "manager"
    },
    {
        name: "Randy",
        id: 2,
        email: "randy@gmail.com",
        role: "engineer"
    },
    {
        name: "Mike",
        id: 3,
        email: "mike@gmail.com",
        role: "intern"
    }
];
console.log(render(team));


