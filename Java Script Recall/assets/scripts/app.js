console.log("Import a variable")
import { project_manager } from "./utils.js";
console.log(project_manager);

console.log("Import default variable")
import project from "./utils.js"
console.log(project);

//In order to export multiple variables at once we need to create an object of the utils file 
console.log("Import all variables at once")
import * as utils from "./utils.js";
console.log(utils.project_manager)
console.log(utils.default)
console.log(utils.project_technology)

//Using 'as' keyword for assigning an alias
console.log("Using 'as' keyword")
import { project_manager as name} from "./utils.js";
console.log(name);


