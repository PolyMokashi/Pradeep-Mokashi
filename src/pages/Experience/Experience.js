import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ExperienceCard from '../../commom-components/ExperienceCard'
import ExperienceInfo from '../../Constants/ExperienceInfo'
import { Link } from '@mui/joy'
const Experience = ({mode}) => {
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
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Stack direction="column" sx={{ width: '70%' }}>
                    {ExperienceInfo.map((data, index) => (
                        <Link
                            key={index}
                            href={data.CompanyLink}
                            underline="none"
                        >
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
                        </Link>
                    ))}
                </Stack>
            </Grid>
        </div>
    )
}

export default Experience
