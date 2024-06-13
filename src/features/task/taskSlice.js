import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    id: "1",
    name: "tarea 1",
    description: "Esta es una descripción",
    completed: false
}, {
    id: "2",
    name: "tarea 2",
    description: "Esta es una descripción",
    completed: false
}]

const taskSlice = createSlice({
    name: "task",
    initialState,/* cuando inicie el estado es blanco / vacio */
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            const isExist = state.filter(task => task.id === action.payload)
            if (isExist) {
                state.splice(state.indexOf(isExist), 1)
            }
        },
    }
})

export { taskSlice }
export const { addTask, deleteTask } = taskSlice.actions