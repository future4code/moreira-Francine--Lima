import express, { application, response } from "express";
import { AddressInfo } from "net";
import { data } from "./data";
import { Newstatus, ToDoList } from "./types";
const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
app.get("/ping", (req, res) => {
  res.send("Pong! 🏓");
});

app.get("/taskstatus/done", (req, res) => {
  const done = data.filter((task) => {
    return task.completed === true; //retorna tudo que não for false
  });
  res.send(done);
});
app.get("/taskstatus/notdone", (req, res) => {
  const notDone = data.filter((task) => {
    return task.completed === false; //retorna tudo que não for true
  });
  res.send(notDone);
});
//create task
app.post("/createtask", (req, res) => {
  const newTask: ToDoList = {
    userId: Date.now(),
    id: Date.now(),
    title: req.body.title,
    completed: req.body.completed,
  };

  if (!req.body) {
    throw new Error("Não tem body");
  } else if (
    typeof req.body.title !== "string" ||
    typeof req.body.completed !== "boolean"
  ) {
    throw new Error("Título inválido ou completed inválido");
  } else {
    const newToDoList = [...data, newTask];
    data.push(newTask);
    res.send(newToDoList);
  }

});
//changing task status
app.put("/changestatus/:taskId",(req,res)=>{
const taksId=req.params.taskId
const newStatus= {
  userId: Date.now(),
  id: Number(taksId),
  completed: req.body.completed,
};
// const newstatus:Newstatus = {
//   id: Number(req.params.taskId),
//   completed: req.body.completed,
// };
 const newToDoList = [...data, newStatus];
})