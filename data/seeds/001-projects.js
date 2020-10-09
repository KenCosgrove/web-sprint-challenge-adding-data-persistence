exports.seed = function (knex) {
    const projects = [
      {
        name: "project1",
        description: "do something",
        completed: false,
      },
      {
        name: "Project2",
        description: "do something else",
        completed: false,
      },
      {
        name: "project 3",
        description: "do another thing",
        completed: true,
      },
    ];
    return knex("projects").insert(projects);
  };