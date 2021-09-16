const render = require("./src/page-template");
const fs = require("fs");
const path = require("path");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "index.html");

const team = [
    new Manager ("Blake", 1, "blake@gmail.com"),
    new Engineer ("Randy", 2, "randy@gmail.com"),
    new Engineer ("Ashley", 3, "ashley@gmail.com"),
    new Intern ("Mike", 4, "mike@gmail.com"),
];

fs.writeFileSync(outputPath, render(team), "utf-8");


