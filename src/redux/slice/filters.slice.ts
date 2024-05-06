import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilters } from '../../components/JobFilter/types';

const initialState = {
    companyName: null,
    experience: null,
    minBasePay: null,
    noOfEmp: null,
    remote: null,
    roles: null,
    techStack: null
} satisfies IFilters as IFilters

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setRoles: (state, newState: PayloadAction<IFilters['roles']>) => {
            state.roles = newState.payload
        },
        setRemote: (state, newState: PayloadAction<IFilters['remote']>) => {
            state.remote = newState.payload
        },
        setExperience: (state, newState: PayloadAction<IFilters['experience']>) => {
            state.experience = newState.payload
        },
        setNoOfEmp: (state, newState: PayloadAction<IFilters['noOfEmp']>) => {
            state.noOfEmp = newState.payload
        },
        setMinBasePay: (state, newState: PayloadAction<IFilters['minBasePay']>) => {
            state.minBasePay = newState.payload
        },
        setTechStack: (state, newState: PayloadAction<IFilters['techStack']>) => {
            state.techStack = newState.payload
        },
        setCompanyName: (state, newState: PayloadAction<IFilters['companyName']>) => {
            state.companyName = newState.payload
        },
    }
})

export const { setCompanyName, setExperience, setMinBasePay, setNoOfEmp, setRemote, setRoles, setTechStack } = filtersSlice.actions;
export default filtersSlice.reducer;