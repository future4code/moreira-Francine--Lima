import { v4 } from "uuid";


//generating id 
const id = v4();

console.log("Generated Id: ", id);

//generating id with function

export function generateId():string{
    return v4();
}

