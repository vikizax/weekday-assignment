import { Box } from "@mui/material"
import { styled } from '@mui/material/styles'

const FilterContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: "flex-end",
    padding: `0 ${theme.typography.pxToRem(20)} ${theme.typography.pxToRem(20)}`,
    gap: 10
}));

export const JobFilter = () => {
    return (
        <FilterContainer>
           FILTERS...
        </FilterContainer>
    )
}
