/* eslint-disable array-callback-return */
import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomCard from '../../commom-components/CustomCard'
import ProjectInfo from '../../Constants/ProjectInfo'
import CommonDrawer from '../../commom-components/CommonDrawer'

const ProjectPage = ({mode}) => {
    const [selectedCard, setSelectedCard] = useState(null)
    const [open, setOpen]= useState(false);

    const toggleDrawer=()=>{
        setOpen(false);
    };

    const handleCardClick=(data)=>{
        setSelectedCard(data);
        setOpen(true);
    }
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h5" color={'blueviolet'}>
                    Projects
                </Typography>
            </Box>
            <Stack
                direction="row"
                spacing={6}
                flexWrap="wrap"
                sx={{ display: 'flex', justifyContent: 'center' }}
                useFlexGap
            >
                {ProjectInfo.map((data) => {
                    if (data.Title) {
                        return (
                            <div onClick={() => handleCardClick(data)}>
                                <CustomCard
                                    key={data.Title}
                                    project_image={data.project_image}
                                    AvatarIcon={data.AvatarIcon}
                                    src={data.src}
                                    ProjectImg={data.ProjectImg}
                                    Project_link={data.Project_link}
                                    Title={data.Title}
                                    SubHeader={data.SubHeader}
                                    TechStack={data.TechStack}
                                    TechIcon={data.TechIcon}
                                    mode={mode}
                                />
                            </div>
                        )
                    }
                })}
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
        </div>
    )
}

export default ProjectPage
