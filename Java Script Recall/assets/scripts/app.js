console.log("Import a variable")
import { projectManager } from "./utils.js";
console.log(projectManager);

console.log("Import default variable")
import project from "./utils.js"
console.log(project);

//In order to export multiple variables at once we need to create an object of the utils file 
console.log("Import all variables at once")
import * as utils from "./utils.js";
console.log(utils.projectManager)
console.log(utils.default)
console.log(utils.projectTechnology)

//Using 'as' keyword for assigning an alias
console.log("Using 'as' keyword")
import { projectManager as name} from "./utils.js";
console.log(name);


