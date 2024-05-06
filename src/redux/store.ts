import { configureStore } from '@reduxjs/toolkit'
import jobsReducer from './slice/jobs.slice'
import filtersReducer from './slice/filters.slice';

export const store = configureStore({
    reducer: {
        jobs: jobsReducer,
        filters: filtersReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch