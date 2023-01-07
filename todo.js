/* eslint-disable no-undef */
const todoList = () => {
  let all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };
  const overdue = () => {
    return all.filter(
      (todo) => todo.dueDate < new Date().toLocaleDateString("en-CA")
    );
  };
  const dueToday = () => {
    return all.filter((todo) => {
      return todo.dueDate === new Date().toLocaleDateString("en-CA");
    });
  };
  const dueLater = () => {
    return all.filter((todo) => {
      todo.dueDate > new Date().toLocaleDateString("en-CA");
    });
  };
  const toDisplayableList = (lists) => {
    return lists
      .map((todo) => {
        dstatus = items_todo.completed ? "[x]" : "[ ]";
        ddate =
          todo.dueDate == new Date().toLocaleDateString("en-CA")
            ? ""
            : todo.dueDate;
        return `$(dstatus) $(todo.title) $(ddate)`;
      })
      .join("\n");
  };
  return {
    all,
    add,
    markAsComplete,
    dueToday,
    overdue,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
