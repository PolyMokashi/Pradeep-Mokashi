import { Box, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import ExperienceCard from '../../commom-components/ExperienceCard'
import ExperienceInfo from '../../Constants/ExperienceInfo'
import { Link } from '@mui/joy'
import ExpMobileView from '../../commom-components/ExpMobileView'
const Experience = ({mode}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h5" color={'blueviolet'}>
                    Experience
                </Typography>
            </Box>
            <Grid
                sx={{
                    display: 'flex',
                    justifyContent: { md: 'center' },
                    alignItems: { md: 'center' },
                }}
            >
                <Stack sx={{ width: { md: '70%' } }}>
                    {ExperienceInfo.map((data, index) => (
                        <Link
                            key={index}
                            href={data.CompanyLink}
                            underline="none"
                        >
                            {isMobile ? (
                                <Box
                                    sx={{
                                        height: '100%',
                                        width: '100%',
                                        mb: 3,
                                    }}
                                >
                                    <ExpMobileView
                                        key={index}
                                        Role={data.Role}
                                        CompanyName={data.CompanyName}
                                        CompanyLogo={data.CompanyLogo}
                                        Months={data.Months}
                                        Place={data.Place}
                                        CompanyLink={data.CompanyLink}
                                        Description={data.Description}
                                        TechIcon={data.TechIcon}
                                        mode={mode}
                                    />
                                </Box>
                            ) : (
                                <ExperienceCard
                                    key={index}
                                    Role={data.Role}
                                    CompanyName={data.CompanyName}
                                    CompanyLogo={data.CompanyLogo}
                                    Months={data.Months}
                                    Place={data.Place}
                                    CompanyLink={data.CompanyLink}
                                    Description={data.Description}
                                    TechIcon={data.TechIcon}
                                    mode={mode}
                                />
                            )}
                        </Link>
                    ))}
                </Stack>
            </Grid>
        </div>
    )
}

export default Experience
