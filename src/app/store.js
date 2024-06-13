import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "../features/task/taskSlice";

const store = configureStore({
    reducer:{task: taskSlice.reducer}
}); /* COMO UN useState externo */

export {store};