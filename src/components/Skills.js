// Skills.js
import React from 'react'
import { Grid, Box, Typography, Avatar } from '@mui/material'
import skills from '../Constants/SkillsInfo'
import { motion } from 'framer-motion'

const Skills = ({mode}) => {
    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h5" gutterBottom>
                My Skills
            </Typography>
            <Grid container spacing={1}>
                {skills.map((skill, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 30, rotate: -5 }}
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            whileHover={{
                                scale: 1.05,
                                rotate: 5,
                                backgroundColor: '#e0f7fa',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: 0.75,
                                    background:
                                        mode === 'off'
                                            ? 'linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)'
                                            : '#f5f5f5',
                                    borderRadius: 1,
                                }}
                            >
                                <Avatar
                                    sx={{ 
                                        width: 24, 
                                        height: 24,
                                        objectFit: 'cover' 
                                    }}
                                    src={skill.icon}
                                />
                                <Typography 
                                    variant="body1" 
                                    sx={{ 
                                        marginLeft: 1,
                                        fontSize: '0.9rem'
                                    }}>
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
