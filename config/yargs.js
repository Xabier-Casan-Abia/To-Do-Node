const { argv } = require("yargs")
  .command("create", "Create a to do", {
    description: {
      demand: true,
      alias: "d",
      desc: "Description of the to do"
    }
  })
  .command("update", "Update a to do", {
    description: {
      demand: true,
      alias: "d",
      desc: "Description of the to do"
    },
    complete: {
      default: true,
      alias: "c",
      desc: "To check as finished a to do"
    }
  })
  .command("remove", "Remove a to do", {
    description: {
      demand: true,
      alias: "d",
      desc: "Description of the to do"
    }
  })
  .help();

module.exports = { argv };
