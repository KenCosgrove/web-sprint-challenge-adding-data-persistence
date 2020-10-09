exports.seed = function (knex) {
    const tasks = [
      {
        description: "sprint challenge",
        completed: false,
        project_id: 1,
      },
      {
        description: "clean kitche",
        completed: false,
        project_id: 2,
      },
      {
        description: "gym",
        completed: true,
        project_id: 3,
      },
    ];
    return knex("tasks").insert(tasks);
  };