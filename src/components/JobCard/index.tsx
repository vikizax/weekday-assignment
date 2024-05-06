import { Box, Stack, Typography } from "@mui/material"
import { JobType } from "../../pages/Home/types"
import {
    ApplyButton,
    AskReferralButton,
    CompanyName,
    JobCardContainer,
    JobDescriptionBody,
    JobDescriptionBodyHead,
    JobDescriptionHead,
    JobLocation,
    JobLogoImg,
    JobPostedOn,
    JobPostedOnContainer,
    JobRole,
    JobSalary,
    MinimunExp,
    MinimunExpTitle,
    ShowMoreActnContainer,
    StyledAvatar,
    StyledBadge
} from './styles'

export const JobCard = (params: JobType) => {
    return (
        <JobCardContainer aria-label="job card" id={params.jdUid}>
            <Box paddingX={({ typography }) => typography.pxToRem(8)} paddingY={({ typography }) => typography.pxToRem(16)}>
                <Stack direction={'row'} paddingBottom={({ typography }) => typography.pxToRem(16)}>
                    <JobPostedOnContainer>
                        <JobPostedOn variant="body1">
                            ⏳ Posted 10 days ago
                        </JobPostedOn>
                    </JobPostedOnContainer>
                </Stack>

                <Stack direction={'row'} gap={({ typography }) => typography.pxToRem(8)} aria-label="job header">
                    <JobLogoImg src={params.logoUrl} alt="job-logo" loading="lazy" fetchPriority="low" />
                    <Stack>
                        <CompanyName variant="h3" aria-label="company name">
                            {params.companyName ?? ''}
                        </CompanyName>
                        <JobRole variant="h2" aria-label="job position">
                            {params.jobRole ?? ''}
                        </JobRole>
                        <JobLocation variant="body1" aria-label="job location">
                            {params.location ?? ''}
                        </JobLocation>
                    </Stack>
                </Stack>
                <JobSalary variant="body2" aria-label="job salary">Estimated Salary: ₹{params.minJdSalary ?? 0} - {params.maxJdSalary ?? 0} LPA ✅</JobSalary>
                <Box aria-label="job description">
                    <JobDescriptionHead variant="body1">
                        About Company:
                    </JobDescriptionHead>
                    <JobDescriptionBody>
                        <JobDescriptionBodyHead>
                            About us
                        </JobDescriptionBodyHead>
                        {params.jobDetailsFromCompany ?? ''}
                    </JobDescriptionBody>
                </Box>
                <ShowMoreActnContainer>
                    <Typography variant="body2">View job</Typography>
                </ShowMoreActnContainer>
                <MinimunExpTitle variant="h3">Minimum Experience</MinimunExpTitle>
                <MinimunExp variant="h2">{params.minExp ?? 'None'} {params.minExp ? params.minExp > 1 ? 'years' : 'year' : ''}</MinimunExp>
                <Stack direction={'row'} justifyContent={'center'} marginY={({ typography }) => typography.pxToRem(5)}>
                    <ApplyButton fullWidth >⚡Easy Apply</ApplyButton>
                </Stack>
                <Stack direction={'row'} marginY={({ typography }) => typography.pxToRem(5)}>
                    <AskReferralButton fullWidth >
                        <Stack direction={'row'} gap={({ typography }) => typography.pxToRem(18)} alignItems={'center'} >
                            <Stack direction={'row'} gap={1}>
                                <StyledBadge overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot">
                                    <StyledAvatar alt="avatar-1" />
                                </StyledBadge>
                                <StyledBadge overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                                    variant="dot">
                                    <StyledAvatar alt="avatar-1" />
                                </StyledBadge>
                            </Stack>
                            Unlock referral asks
                        </Stack>
                    </AskReferralButton>
                </Stack>
            </Box>
        </JobCardContainer>
    )
}
