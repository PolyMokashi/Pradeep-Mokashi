// src/Skills.js
import React from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'
import skills from '../Constants/SkillsInfo'

const Skills = () => {
    return (
        <Box sx={{ p: 4, mt: 4 }}>
            <Typography variant="h5" gutterBottom>
                My Skills
            </Typography>
            <Grid container spacing={2}>
                {skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Paper
                            // elevation={2}
                            sx={{
                                p: 1,
                                textAlign: 'center',
                                backgroundColor: '#f5f5f5',
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: 'bold' }}
                            >
                                {skill}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Skills
