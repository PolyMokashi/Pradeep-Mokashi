import {
    Card,
    CardHeader,
    Avatar,
    CardContent,
    CardActions,
} from '@mui/material'
import React, { useState } from 'react'
import "./CustomCard.css"
import VideoPlayer from './VideoPlayer'
import CustomButton from './CustomButton'

const CustomCard = ({
    AvatarIcon,
    src,
    Title,
    SubHeader,
    project_image,
    mode,
}) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <>
            <Card
                className="mycard"
                sx={{
                    width: { xs: '100%', md: 550 },
                    ml: { xs: 1, md: '' },
                    opacity: { md: 0.8 },
                    transition: 'all 0.4s ease',
                    '&:hover': {
                        opacity: 1,
                    },
                    position: 'relative',
                    height: '100%',
                    cursor: 'pointer',
                    background:
                        mode === 'off'
                            ? 'linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.95) 100%)'
                            : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    borderRadius: '16px',
                    border: mode === 'off' 
                        ? '1px solid rgba(138, 43, 226, 0.2)' 
                        : '1px solid rgba(0, 0, 0, 0.08)',
                }}
                elevation={3}
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
                        sx: { color: mode === 'off' ? '#b0b0b0' : 'inherit' },
                        fontFamily: 'Verdana',
                    }}
                />
                <CardContent>
                    {src && !String(src).toLowerCase().includes('.pdf') ? (
                        <VideoPlayer src={src}></VideoPlayer>
                    ) : (
                        <img
                            src={project_image}
                            alt={Title}
                            className={imageLoaded ? 'image-loaded' : ''}
                            onLoad={() => setImageLoaded(true)}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                                opacity: imageLoaded ? 1 : 0,
                                transition: 'opacity 0.5s ease',
                            }}
                        />
                    )}
                </CardContent>
                <CardActions>
                    <CustomButton variant="text" onClick={() => {}}>
                        Tap to view more
                    </CustomButton>
                </CardActions>
            </Card>
        </>
    )
}

export default CustomCard

