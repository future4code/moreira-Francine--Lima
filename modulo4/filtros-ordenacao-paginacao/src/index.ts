import { app } from "./app";
import { getUsersByTypeOrNameAndPage } from "./endpoints/getAllUsers";

// import { getUsersByTypeOrName, getUserByName,getAllUsers,getUsersByType } from "./endpoints/getAllUsers";


// get all users e get all users com offset
// app.get("/users", getAllUsers);

//get user by name
// app.get("/user", getUserByName);

//get user by type
// app.get("/users/:type", getUsersByType);


//get user by type or name
// app.get("/users", getUsersByTypeOrName);

//get user by type or name and offset
app.get("/users",getUsersByTypeOrNameAndPage)



