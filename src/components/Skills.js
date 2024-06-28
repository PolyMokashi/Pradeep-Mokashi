// Skills.js
import React from 'react'
import { Grid, Box, Typography, Avatar } from '@mui/material'
import skills from '../Constants/SkillsInfo'
import { motion } from 'framer-motion'

const Skills = ({mode}) => {
    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>
                My Skills
            </Typography>
            <Grid container spacing={2}>
                {skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 50, rotate: -10 }}
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.1,
                                rotate: 10,
                                backgroundColor: '#e0f7fa',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: 1,
                                    background:
                                        mode === 'off'
                                            ? 'linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)'
                                            : '#f5f5f5',
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
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Skills
