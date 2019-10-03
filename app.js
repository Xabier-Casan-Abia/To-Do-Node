const { argv } = require("./config/yargs");
const colors = require("colors");

const { create, get, update, remove } = require("./to-do/to-do");

let comando = argv._[0];

switch (comando) {
  case "create":
    let task = create(argv.description);
    console.log(task);
    break;

  case "list":
    let list = get();
    for (let task of list) {
      console.log("============To Do:============".rainbow.bold);
      console.log(task.description);
      console.log("Complete: ", task.complete);
      console.log("==============================".rainbow.bold);
    }
    break;

  case "update":
    let updated = update(argv.description, argv.complete);
    console.log(updated);
    break;

  case "remove":
    let removed = remove(argv.description);
    console.log(removed);
    break;

  default:
    console.log("Command not found, please run: node app help");
}
