//---------------------------------------------------//
console.log("Import - Export")

//----------------//
//Import a variable:
console.log("Import a variable");
//----------------//

import { projectManager } from "./ImportExport.js";
console.log(projectManager);

//----------------//
//Import default variable:
console.log("Import default variable");
//----------------//

import project from "./ImportExport.js"
console.log(project);

//----------------//
//Import all variables at once:
console.log("Import all variables at once");
//----------------//

//In order to export multiple variables at once we need to create an object of the utils file 
import * as utils from "./ImportExport.js";
console.log(utils.projectManager)
console.log(utils.default)
console.log(utils.projectTechnology)

//----------------//
//Using 'as' keyword:
console.log("Using 'as' keyword");
//----------------//

//Using 'as' keyword for assigning an alias
import { projectManager as name} from "./ImportExport.js";
console.log(name);


//---------------------------------------------------//