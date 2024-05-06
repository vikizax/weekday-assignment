import { Avatar, Badge, Box, Button, Paper, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

export const JobCardContainer = styled(Paper)(({ theme }) => ({
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 4px 0px',
    padding: theme.typography.pxToRem(5),
    color: 'rgba(0, 0, 0, 0.87)',
    cursor: 'default',
    borderRadius: theme.typography.pxToRem(20),
    maxWidth: theme.typography.pxToRem(360),
    marginLeft: 'auto',
    marginRight: 'auto',
}))

export const JobLogoImg = styled('img')(({ theme }) => ({
    width: theme.typography.pxToRem(38),
    height: theme.typography.pxToRem(38),
    objectFit: 'contain'
}))

export const CompanyName = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.pxToRem(13),
    fontWeight: 600,
    letterSpacing: theme.typography.pxToRem(1),
    marginBottom: theme.typography.pxToRem(3),
    color: '#8b8b8b'
}))

export const JobRole = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 400,
    color: 'rgba(0, 0, 0, 0.87)',
    lineHeight: 1.5,
    textTransform: 'capitalize',
    letterSpacing: 'unset'
}))

export const JobLocation = styled(Typography)(({ theme }) => ({
    textTransform: 'capitalize',
    fontSize: theme.typography.pxToRem(11),
    fontWeight: 500,
    marginTop: theme.typography.pxToRem(5)
}))

export const JobSalary = styled(Typography)(({ theme }) => ({
    color: 'rgb(77, 89, 106)',
    lineHeight: 1.43,
    fontWeight: 400,
    fontSize: theme.typography.pxToRem(14),
    margin: `${theme.typography.pxToRem(8)} 0`
}))

export const JobDescriptionHead = styled(Typography)(({ theme }) => ({
    margin: 0,
    fontSize: theme.typography.pxToRem(16),
    lineHeight: 1.5,
    fontWeight: 500,
}))

export const JobDescriptionBody = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 300,
    height: theme.typography.pxToRem(250),
    overflow: 'hidden',
    maskImage: 'linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))'
}))

export const ShowMoreActnContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    top: theme.typography.pxToRem(-20),
    marginBottom: theme.typography.pxToRem(8),
    textAlign: 'center',
    '& > p': {
        cursor: 'pointer',
        color: '#4943da'
    }
}))

export const MinimunExpTitle = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.pxToRem(13),
    fontWeight: 600,
    letterSpacing: theme.typography.pxToRem(1),
    marginBottom: theme.typography.pxToRem(3),
    color: '#8b8b8b',
}))

export const MinimunExp = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.pxToRem(14),
    lineHeight: 1.5
}))

export const ApplyButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'rgb(85, 239, 196)',
    color: '#000000',
    fontSize: theme.typography.pxToRem(16),
    fontWeight: 500,
    padding: `${theme.typography.pxToRem(8)} ${theme.typography.pxToRem(18)}`,
    borderRadius: theme.typography.pxToRem(8),
    textTransform: 'capitalize',
    '&:hover': {
        backgroundColor: 'rgb(85, 239, 196)'
    }
}))

export const AskReferralButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'rgb(73, 67, 218)',
    color: '#FFF',
    fontSize: theme.typography.pxToRem(16),
    fontWeight: 300,
    padding: `${theme.typography.pxToRem(8)} ${theme.typography.pxToRem(18)}`,
    borderRadius: theme.typography.pxToRem(8),
    textTransform: 'none',
    textAlign: 'left',
    '&:hover': {
        backgroundColor: 'rgb(73, 67, 218)'
    }
}))

export const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        filter: `blur(${theme.typography.pxToRem(1.5)})`
    }
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 32,
    height: 32,
    filter: `blur(${theme.typography.pxToRem(1.5)})`
}))

export const JobPostedOnContainer = styled(Box)(({ theme }) => ({
    padding: `${theme.typography.pxToRem(4)} ${theme.typography.pxToRem(6)}`,
    boxShadow: 'rgba(6, 6, 6, 0.05) 0px 2px 6px 0px',
    borderRadius: `${theme.typography.pxToRem(10)}`,
    border: '1px solid rgb(230, 230, 230)',
}))

export const JobPostedOn = styled(Typography)(({ theme }) => ({
    color: 'rgba(0, 0, 0, 0.87)',
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: `${theme.typography.pxToRem(9)}`
}))