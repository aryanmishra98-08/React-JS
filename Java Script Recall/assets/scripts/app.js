//---------------------------------------------------//
console.log("Import - Export")

//Import a variable
console.log("Import a variable")
import { projectManager } from "./ImportExport.js";
console.log(projectManager);

//Import default variable
console.log("Import default variable")
import project from "./ImportExport.js"
console.log(project);

//In order to export multiple variables at once we need to create an object of the utils file 
console.log("Import all variables at once")
import * as utils from "./ImportExport.js";
console.log(utils.projectManager)
console.log(utils.default)
console.log(utils.projectTechnology)

//Using 'as' keyword for assigning an alias
console.log("Using 'as' keyword")
import { projectManager as name} from "./ImportExport.js";
console.log(name);


//---------------------------------------------------//