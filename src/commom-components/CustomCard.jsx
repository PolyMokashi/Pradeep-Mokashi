import {
    Card,
    CardHeader,
    Avatar,
    CardContent,
    CardActions,
    Box,
    Typography,
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
    const [imageFailed, setImageFailed] = useState(false)
    const isVideo = src && !String(src).toLowerCase().includes('.pdf')
    const hasImage = project_image && !imageFailed

    return (
        <Card
                className="mycard"
                sx={{
                    width: '100%',
                    position: 'relative',
                    height: '100%',
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
                    sx={{ alignItems: 'flex-start', minHeight: 100 }}
                    titleTypographyProps={{
                        sx: {
                            color: mode === 'off' ? 'white' : 'inherit',
                            fontWeight: 'bold',
                            fontFamily: 'Verdana',
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                            overflow: 'hidden',
                        },
                    }}
                    subheaderTypographyProps={{
                        sx: {
                            color: mode === 'off' ? '#b0b0b0' : 'inherit',
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                            overflow: 'hidden',
                        },
                        fontFamily: 'Verdana',
                    }}
                />
                <CardContent>
                    <Box
                        sx={{
                            width: '100%',
                            aspectRatio: '16 / 9',
                            overflow: 'hidden',
                            borderRadius: 2,
                            display: 'grid',
                            placeItems: 'center',
                            bgcolor:
                                mode === 'off'
                                    ? 'rgba(255,255,255,0.06)'
                                    : 'rgba(35,25,55,0.06)',
                            '& > div': { width: '100%', height: '100%' },
                        }}
                    >
                        {isVideo ? (
                            <VideoPlayer src={src} />
                        ) : hasImage ? (
                            <Box
                                component="img"
                                src={project_image}
                                alt={`${Title} project preview`}
                                onError={() => setImageFailed(true)}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                }}
                            />
                        ) : (
                            <Box sx={{ textAlign: 'center', p: 2 }}>
                                <Avatar
                                    src={AvatarIcon}
                                    alt=""
                                    sx={{
                                        width: 56,
                                        height: 56,
                                        mx: 'auto',
                                        mb: 1,
                                        bgcolor: 'transparent',
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Preview unavailable
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </CardContent>
                <CardActions>
                    <CustomButton variant="text" onClick={() => {}}>
                        View project details
                    </CustomButton>
                </CardActions>
            </Card>
    )
}

export default CustomCard

