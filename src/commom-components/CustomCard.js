import {
    Card,
    CardHeader,
    Avatar,
    CardContent,
} from '@mui/material'
import React from 'react'
import "./CustomCard.css"
import VideoPlayer from './VideoPlayer'
const CustomCard = ({
    AvatarIcon,
    src,
    Title,
    SubHeader,
    project_image,
    mode,
}) => {

    return (
        <>
            <Card
                className="mycard"
                sx={{
                    mt: 5,
                    width: { xs: '100%', md: 550 },
                    ml: { xs: 1, md: '' },
                    opacity: 0.5,
                    transition: 'opacity 0.3s',
                    '&:hover': {
                        opacity: 1,
                        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
                    },
                    position: 'relative',
                    height: '100%',
                    cursor: 'pointer',
                    background: mode==='off'? 'linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)': '',
                }}
                elevation="3"
            >
                <CardHeader
                    avatar={
                        <Avatar
                            sx={{
                                width: { xs: 48, md: 60 },
                                height: { xs: 48, md: 60 },
                                background: 'transparent',
                            }}
                            aria-label="Technology Stack"
                            src={AvatarIcon}
                        />
                    }
                    title={Title}
                    subheader={SubHeader}
                    titleTypographyProps={{
                        sx: {
                            color: mode === 'off' ? 'white' : 'inherit',
                            fontWeight: 'bold',
                            fontFamily: 'Verdana',
                        },
                    }}
                    subheaderTypographyProps={{
                        sx: { color: mode === 'off' ? 'white' : 'inherit' },
                        fontFamily: 'Verdana',
                    }}
                />
                <CardContent>
                    {src ? (
                        <VideoPlayer src={src} autoPlay loop >
                        </VideoPlayer>
                    ) : (
                        <img
                            src={project_image}
                            alt="Project Name"
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                        ></img>
                    )}
                </CardContent>
            </Card>
        </>
    )
}

export default CustomCard
