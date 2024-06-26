// Skills.js
import React from 'react'
import { Grid, Box, Typography, Avatar } from '@mui/material'
import skills from '../Constants/SkillsInfo'

const Skills = () => {
    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>
                My Skills
            </Typography>
            <Grid container spacing={2}>
                {skills.map((skill) => (
                    <Grid item xs={12} sm={6} md={4} key={skill.name}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: 1,
                                backgroundColor: '#f5f5f5',
                                borderRadius: 1,
                            }}
                        >
                            <Avatar
                                size="sm"
                                sx={{ objectFit: 'cover' }}
                                src={skill.icon}
                            />
                            <Typography variant="h6" sx={{ marginLeft: 1 }}>
                                {skill.name}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Skills
