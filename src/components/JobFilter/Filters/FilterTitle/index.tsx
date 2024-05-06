import { Typography, TypographyProps } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledTitle = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.pxToRem(13),
    fontWeight: 500
}))


export const FilterTitle = (params: TypographyProps) => {
    return <StyledTitle {...params} variant='body1'>
        {params.children}
    </StyledTitle>
}