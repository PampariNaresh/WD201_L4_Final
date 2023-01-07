/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Testing the TodoList", () => {
  beforeAll(() => {
    add({
      title: "Heading",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
  });
  test("Should add new todo item ", () => {
    const todoItemCount = all.length;
    add({
      title: "Heading",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(todoItemCount + 1);
  });
  test("Should mark a todo item as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("Should check retrival of overdue todo items", () => {
    let items_overdue = overdue();
    expect(
      items_overdue.every((todo) => {
        return todo.dueDate < new Date().toLocaleDateString("en-CA");
      })
    ).toBe(true);
  });
  test("Should check retrival of duetoday todo items", () => {
    let items_dueToday = dueToday();

    expect(
      items_dueToday.every((todo) => {
        return todo.dueDate === new Date().toLocaleDateString("en-CA");
      })
    ).toBe(true);
  });

  test("Should check retrival of duelater todo items", () => {
    let items_dueLater = dueLater();

    expect(
      items_dueLater.every((todo) => {
        return todo.dueDate > new Date().toLocaleDateString("en-CA");
      })
    ).toBe(true);
  });
});
