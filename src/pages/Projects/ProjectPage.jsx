import { Box, Grid, Typography } from '@mui/material'
import React, { lazy, Suspense, useState } from 'react'
import CustomCard from '../../commom-components/CustomCard'
import { motion, useReducedMotion } from 'framer-motion'

const CommonDrawer = lazy(() => import('../../commom-components/CommonDrawer'))

const ProjectPage = ({ mode, projects }) => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [open, setOpen] = useState(false);
    const prefersReducedMotion = useReducedMotion()

    const cardVariants = {
        offscreen: {
            y: prefersReducedMotion ? 0 : 24,
            opacity: prefersReducedMotion ? 1 : 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: { duration: prefersReducedMotion ? 0 : 0.35 },
        },
    }

    const toggleDrawer = () => {
        setOpen(false);
    }

    const handleCardClick = (data) => {
        setSelectedCard(data);
        setOpen(true);
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2
                }}
            >
                <Typography variant="h5" color={'blueviolet'}>
                    Projects
                </Typography>
                <Box>
                    <Typography 
                        variant="subtitle1" 
                        color={mode === 'off' ? 'white' : 'gray'}
                        sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            gap: 1
                        }}
                    >
                        Scroll to explore more projects ↓
                    </Typography>
                </Box>
            </Box>
            <Grid
                container
                spacing={{ xs: 2, sm: 3, md: 4 }}
                justifyContent="center"
                sx={{ mt: 1, mb: { xs: 10, md: 15 } }}
            >
                {projects.map((data) => (
                    <Grid item xs={12} md={6} key={data.Title}>
                        <Box
                            component={motion.div}
                            initial={prefersReducedMotion ? false : 'offscreen'}
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                            sx={{ height: '100%' }}
                            onClick={() => handleCardClick(data)}
                        >
                            <CustomCard
                                project_image={data.project_image}
                                AvatarIcon={data.AvatarIcon}
                                src={data.src}
                                Project_link={data.Project_link}
                                Title={data.Title}
                                SubHeader={data.SubHeader}
                                TechStack={data.TechStack}
                                TechIcon={data.TechIcon}
                                mode={mode}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
            {selectedCard && (
                <Suspense fallback={null}>
                    <CommonDrawer
                        open={open}
                        toggleDrawer={toggleDrawer}
                        Title={selectedCard.Title}
                        Description={selectedCard.Description}
                        SubHeader={selectedCard.SubHeader}
                        src={selectedCard.src}
                        project_image={selectedCard.project_image}
                        TechIcon={selectedCard.TechIcon}
                        Project_link={selectedCard.Project_link}
                        github_link={selectedCard.github_link}
                        mode={mode}
                    />
                </Suspense>
            )}
        </>
    )
}

export default ProjectPage