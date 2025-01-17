import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Design UI" }],
};

// function sayHello() {
//   console.log("HELLOOOO");
// }

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // addTodo: sayHello,
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // updateTodo: (state, action) => {
    //   const todo = {
    //     id: action.payload,
    //     text: action.payload,
    //   };
    //   state.todos.push(todo);
    // },
    updateTodo: (state, action) => {
      const { id, text } = action.payload; // Expecting payload to contain id and new text
      const todo = state.todos.find((todo) => todo.id === id); // Find the todo by id
      if (todo) {
        todo.text = text; // Update the todo's text
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
