import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IJobFetchResult } from '../../pages/Home/types'
import { setCompanyName, setExperience, setMinBasePay, setNoOfEmp, setRemote, setRoles, setTechStack } from './filters.slice';

const initialState = {
    jdList: [],
    filteredJdList: [],
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
            const updatedState = state.jdList.concat(newState.payload.jdList);
            state.jdList = updatedState;
            let filteredState = updatedState;
            state.totalCount = newState.payload.totalCount;
            if (state.filters.companyName) {
                filteredState = filteredState.filter(jd => jd.companyName.toLowerCase().includes(state.filters.companyName?.toLowerCase() ?? ''))
            }
            if (state.filters.experience) {
                filteredState = filteredState.filter(
                    jd => Number(jd.minExp ?? 0) === Number(state.filters.experience?.value ?? 0)
                )
            }
            if (state.filters?.minBasePay) {
                filteredState = filteredState.filter(
                    jd => Number(jd.minJdSalary ?? 0) >= Number(state.filters.minBasePay?.value.split(/[a-z]/i)[0] ?? 0)
                )
            }
            if (state.filters?.noOfEmp) {
                let min = Number.MAX_SAFE_INTEGER
                let max = Number.MIN_SAFE_INTEGER

                state.filters.noOfEmp.forEach(exp => {
                    const [_min, _max] = exp.value.split('-')
                    if (_max === undefined) return max = Math.max(max, Number(_min.replace('+', '') ?? 0))
                    min = Math.min(min, Number(_min ?? 0))
                    max = Math.max(max, Number(_max ?? 0))
                })
                min = min === Number.MAX_SAFE_INTEGER ? 0 : min;
                // console.log({ min, max })
            }
            if (state.filters?.roles) {
                filteredState = filteredState.filter(
                    jd => state.filters.roles?.some(role => role.value.toLowerCase() === jd.jobRole)
                )
            }
            if (state.filters.remote) {
                filteredState = filteredState.filter(
                    jd => {
                        return state.filters.remote?.some(rem => {
                            if (rem.value.toLowerCase() === 'in-office') return true;
                            return rem.value.toLowerCase() === jd.location
                        })
                    }
                )
            }
            if (state.filters.techStack) {
                // techstack filter code...
            }
            state.filteredJdList = filteredState
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