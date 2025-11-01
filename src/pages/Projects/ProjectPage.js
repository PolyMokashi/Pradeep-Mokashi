import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomCard from '../../commom-components/CustomCard'
import ProjectInfo from '../../Constants/ProjectInfo'
import CommonDrawer from '../../commom-components/CommonDrawer'
import { motion } from 'framer-motion'

const ProjectPage = ({ mode }) => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [open, setOpen] = useState(false);

const cardVariants = {
    offscreen: {
        y: 300,
        opacity: 0,
    },
    onscreen: {
        y: 50,
        opacity: 1,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 0.8,
        },
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
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                >
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
                </motion.div>
            </Box>
            <Stack
                direction="row"
                spacing={6}
                flexWrap="wrap"
                sx={{ display: 'flex', justifyContent: 'center', mb:15 }}
                useFlexGap
            >
                {ProjectInfo.map((data) => (
                    <motion.div
                        key={data.Title}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        variants={cardVariants}
                        onClick={() => handleCardClick(data)}
                    >
                        <CustomCard
                            key={data.Title}
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
                    </motion.div>
                ))}
            </Stack>
            {selectedCard && (
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
            )}
        </>
    )
}

export default ProjectPage