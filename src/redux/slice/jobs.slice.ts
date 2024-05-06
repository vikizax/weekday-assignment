import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IJobFetchResult } from '../../pages/Home/types'
import { setCompanyName, setExperience, setMinBasePay, setNoOfEmp, setRemote, setRoles, setTechStack } from './filters.slice';

const initialState = {
    jdList: [],
    totalCount: 0,
    filters: {
        companyName: null,
        experience: null,
        minBasePay: null,
        noOfEmp: null,
        remote: null,
        roles: null,
        techStack: null
    }
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
    },
    extraReducers: (builder => {
        builder.addCase(setCompanyName, (state, action) => {
            state.filters.companyName = action.payload
        })
        builder.addCase(setExperience, (state, action) => {
            state.filters.experience = action.payload
        })
        builder.addCase(setTechStack, (state, action) => {
            state.filters.techStack = action.payload
        })
        builder.addCase(setMinBasePay, (state, action) => {
            state.filters.minBasePay = action.payload
        })
        builder.addCase(setNoOfEmp, (state, action) => {
            state.filters.noOfEmp = action.payload
        })
        builder.addCase(setRemote, (state, action) => {
            state.filters.remote = action.payload
        })
        builder.addCase(setRoles, (state, action) => {
            state.filters.roles = action.payload
        })
    })
});

export const { setJobs } = jobsSlice.actions;
export default jobsSlice.reducer;