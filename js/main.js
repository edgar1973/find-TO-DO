const foundUser = users.find((user) => user.company.bs.includes('web'));

const foundUncompletedToDos = todos
  .filter(todo => todo.userId === foundUser.id)
  .filter(userTodo => !userTodo.completed);

console.log(foundUncompletedToDos);

