import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{
        id: 1,
        text: "Hellow World!"
    }]
}

export const tododSlice = createSlice({
    name: "todosRedux",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // new todos create
            const todo = {
                // reference in initial stae todos
                id: nanoid(),
                text: action.payload                                       //"Hellow World!"====payload is an object
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload
            )
        },
        updateTodo:(state,action)=>{
            state.todos =state.todos.map((todo)=>todo.id === action.payload.id ? action.payload : todo)
        }
    }
})

export const {addTodo,removeTodo,updateTodo} =tododSlice.actions;
export default tododSlice.reducer ;