import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IJobFetchResult } from '../../pages/Home/types'

const initialState = {
    jdList: [],
    totalCount: 0
} satisfies IJobFetchResult as IJobFetchResult;

export const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setJobs: (state, newState: PayloadAction<IJobFetchResult>) => {
            const updatedJdList = state.jdList.concat(newState.payload.jdList);
            state.jdList = updatedJdList;
            state.totalCount = newState.payload.totalCount;
        }
    }
});

export const { setJobs } = jobsSlice.actions;
export default jobsSlice.reducer;