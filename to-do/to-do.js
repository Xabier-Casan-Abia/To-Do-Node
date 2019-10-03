const fs = require("fs");

let toDoList = [];

const saveDB = () => {
  let data = JSON.stringify(toDoList);

  fs.writeFile("db/data.json", data, err => {
    if (err)
      throw new Error("The to do couln't be saved in the data base", err);
  });
};

const loadDB = () => {
  try {
    toDoList = require("../db/data.json");
  } catch (error) {
    toDoList = [];
  }
};

const create = description => {
  loadDB();
  let toDo = {
    description,
    complete: false
  };
  toDoList.push(toDo);
  saveDB();
  return toDo;
};

const get = () => {
  loadDB();
  return toDoList;
};

const update = (description, complete = true) => {
  loadDB();
  let index = toDoList.findIndex(task => task.description === description);
  if (index >= 0) {
    if (complete === "true" || complete === "True" || complete === true) {
      toDoList[index].complete = true;
      saveDB();
      return "To do updated";
    } else if (complete === "false" || complete === "False") {
      toDoList[index].complete = false;
      saveDB();
      return "To do updated";
    } else {
      return "Error, 'compleate' has to be either true or false";
    }
  } else {
    return false;
  }
};

const remove = description => {
  loadDB();
  let newToDoList = toDoList.filter(toDo => toDo.description !== description);
  if (newToDoList.length === toDoList.length) {
    return false;
  } else {
    toDoList = newToDoList;
    saveDB();
    return toDoList;
  }
};

module.exports = { create, get, update, remove };
